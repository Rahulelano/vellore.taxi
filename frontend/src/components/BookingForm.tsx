import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  Info, 
  ShieldCheck, 
  Zap, 
  Navigation,
  ArrowRightLeft,
  ArrowRight,
  MessageCircle,
  CarFront
} from 'lucide-react';
import { cn } from "@/lib/utils";
import etiosImg from '@/assets/Etios.jpg';
import sedanImg from '@/assets/seadon.jpg';
import suvImg from '@/assets/suv.jpg';

const COMMON_LOCATIONS = [
  "Vellore", "Chennai", "Bangalore", "Trichy", "Coimbatore", "Madurai", "Salem", 
  "Hosur", "Tirupati", "Pondicherry", "Thiruvannamalai", "Kanchipuram", "Ambur", 
  "Vaniyambadi", "Katpadi", "Arcot", "Ranipet", "Walajapet", "Erode", "Tiruppur",
  "Tirunelveli", "Tuticorin", "Nagercoil", "Thanjavur", "Dindigul", "Sivakasi",
  "Karur", "Ooty", "Kodaikanal", "Yelagiri", "Kumbakonam", "Nagapattinam", "Cuddalore"
];

const LOCATION_COORDS: Record<string, [number, number]> = {
  "Vellore": [12.9165, 79.1325],
  "Chennai": [13.0827, 80.2707],
  "Bangalore": [12.9716, 77.5946],
  "Trichy": [10.7905, 78.7047],
  "Coimbatore": [11.0168, 76.9558],
  "Madurai": [9.9252, 78.1198],
  "Salem": [11.6643, 78.1460],
  "Hosur": [12.7409, 77.8253],
  "Tirupati": [13.6285, 79.4192],
  "Pondicherry": [11.9416, 79.8083],
  "Thiruvannamalai": [12.2253, 79.0747],
  "Kanchipuram": [12.8342, 79.7037],
  "Ambur": [12.7846, 78.7188],
  "Vaniyambadi": [12.6841, 78.6203],
  "Katpadi": [12.9807, 79.1372],
  "Arcot": [12.8953, 79.3175],
  "Ranipet": [12.9248, 79.3331],
  "Walajapet": [12.8986, 79.3547],
  "Erode": [11.3410, 77.7172],
  "Tiruppur": [11.1085, 77.3411],
  "Tirunelveli": [8.7139, 77.7567],
  "Tuticorin": [8.7642, 78.1348],
  "Nagercoil": [8.1833, 77.4119],
  "Thanjavur": [10.7870, 79.1378],
  "Dindigul": [10.3673, 77.9803],
  "Sivakasi": [9.4533, 77.7850],
  "Karur": [10.9601, 78.0766],
  "Ooty": [11.4102, 76.6950],
  "Kodaikanal": [10.2381, 77.4892],
  "Yelagiri": [12.6074, 78.6433],
  "Kumbakonam": [10.9602, 79.3845],
  "Nagapattinam": [10.7672, 79.8444],
  "Cuddalore": [11.7480, 79.7714]
};

const calculateExactDistance = (loc1: string, loc2: string) => {
  const coord1 = LOCATION_COORDS[loc1];
  const coord2 = LOCATION_COORDS[loc2];
  
  if (!coord1 || !coord2) return Math.floor(Math.random() * (150 - 50) + 50);

  const R = 6371; // Earth radius in km
  const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
  const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const straightLine = R * c;
  
  // Road distance is typically 1.25x to 1.4x the straight line distance
  return Math.round(straightLine * 1.35);
};

const VEHICLES = [
  {
    id: 'sedan',
    name: 'Economy Sedan',
    subTitle: 'Maruti Suzuki Dzire, Toyota Etios',
    maxPax: 4,
    image: sedanImg,
    oneway: { rate: 14, minKm: 130, batta: 400, features: ["130km guaranteed coverage", "Air Conditioned", "2 Large Bags"] },
    roundtrip: { rate: 13, minKm: 250, batta: 400, features: ["250km / day coverage", "Best for long trips", "Well Maintained"] }
  },
  {
    id: 'suv',
    name: 'Premium SUV',
    subTitle: 'Toyota Innova Crysta',
    maxPax: 7,
    image: suvImg,
    oneway: { rate: 19, minKm: 130, batta: 400, features: ["Luxurious Comfort", "Dedicated Space", "Professional Pilot"] },
    roundtrip: { rate: 18, minKm: 250, batta: 400, features: ["Spacious Legroom", "Top Tier Safety", "GPS Enabled"] }
  },
  {
    id: 'ertiga',
    name: 'Standard SUV',
    subTitle: 'Maruti Suzuki Ertiga',
    maxPax: 6,
    image: etiosImg,
    oneway: { rate: 18, minKm: 250, batta: 400, features: ["Family Choice", "Economical for 6", "Clean Interior"] },
    roundtrip: { rate: 16, minKm: 250, batta: 400, features: ["250km / day coverage", "Reliable Service", "Music System"] }
  }
];

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeInput, setActiveInput] = useState<'pickup' | 'drop' | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '12:00 PM',
    returnDate: '',
    returnTime: '12:00 AM',
    message: ''
  });

  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationSearch = (val: string, type: 'pickup' | 'drop') => {
    if (type === 'pickup') setPickup(val);
    else setDrop(val);
    setActiveInput(type);

    if (val.length > 0) {
      const filtered = COMMON_LOCATIONS.filter(loc => 
        loc.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const selectLocation = (loc: string) => {
    if (activeInput === 'pickup') setPickup(loc);
    else setDrop(loc);
    setSuggestions([]);
    
    // Auto-calculate distance if both set
    const p = activeInput === 'pickup' ? loc : pickup;
    const d = activeInput === 'drop' ? loc : drop;
    
    if (p && d) {
      const dist = calculateExactDistance(p, d);
      setDistance(dist);
    }
  };

  const calculatePrice = (vehicleId: string) => {
    const v = VEHICLES.find(veh => veh.id === vehicleId);
    if (!v || !distance) return 0;
    
    const rules = tripType === 'oneway' ? v.oneway : v.roundtrip;
    const billableKm = Math.max(distance, rules.minKm);
    
    if (tripType === 'roundtrip') {
      return (billableKm * 2 * rules.rate) + rules.batta;
    }
    return (billableKm * rules.rate) + rules.batta;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVehicle) return alert("Please select a vehicle");
    
    setIsSubmitting(true);
    const v = VEHICLES.find(veh => veh.id === selectedVehicle);
    const totalPrice = calculatePrice(selectedVehicle);
    
    const rules = tripType === 'oneway' ? v?.oneway : v?.roundtrip;
    
    // Prepare Email Data
    const bookingData = {
      tripType,
      pickup,
      drop,
      distance,
      vehicleName: v?.name,
      totalPrice,
      date: form.date,
      time: form.time,
      returnDate: form.returnDate,
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      rate: rules?.rate,
      batta: rules?.batta
    };

    try {
      // Send Email via Backend
      const response = await fetch('http://localhost:9100/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        toast.success("Booking details sent to our email!");
      } else {
        toast.error("Could not send email, but you can still book via WhatsApp.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    // WhatsApp Message
    let msg = `*🚀 NEW TAXI BOOKING REQUEST*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📍 *Trip Details*\n`;
    msg += `Type: ${tripType === 'oneway' ? 'One Way Drop' : 'Round Trip'}\n`;
    msg += `Vehicle: ${v?.name}\n`;
    msg += `From: ${pickup}\n`;
    msg += `To: ${drop}\n`;
    msg += `Distance: ${distance} km\n`;
    msg += `Price: ₹${totalPrice}\n\n`;
    
    if (form.message) {
      msg += `💬 *Message*\n${form.message}\n\n`;
    }
    
    msg += `📅 *Schedule*\n`;
    msg += `Date: ${form.date}\n`;
    msg += `Time: ${form.time}\n`;
    if (tripType === 'roundtrip') {
      msg += `Return: ${form.returnDate} at ${form.returnTime}\n`;
    }
    msg += `\n👤 *Customer Contact*\n`;
    msg += `Name: ${form.name}\n`;
    msg += `Phone: ${form.phone}\n`;
    msg += `Email: ${form.email}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `_Sent via VELLORE.TAXI Booking Form_`;
    
    setIsSubmitting(false);
    window.open(`https://wa.me/919442030725?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const timeOptions = [];
  for (let i = 0; i < 24; i++) {
    const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
    const ampm = i < 12 ? 'AM' : 'PM';
    timeOptions.push(`${hour}:00 ${ampm}`);
    timeOptions.push(`${hour}:30 ${ampm}`);
  }

  return (
    <div className="w-full relative max-w-5xl mx-auto">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-taxi-orange/10 rounded-full blur-3xl -z-10" />

      {/* Booking Tabs */}
      <div className="flex justify-center mb-0 relative z-10">
        <div className="bg-white/50 backdrop-blur-md p-1 rounded-2xl border border-white/20 shadow-xl flex gap-1">
          {['oneway', 'roundtrip'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => { setTripType(type as any); setDistance(null); setSelectedVehicle(null); }}
              className={cn(
                "px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2",
                tripType === type 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                  : "hover:bg-white/50 text-muted-foreground"
              )}
            >
              {type === 'oneway' ? <ArrowRight className="w-4 h-4" /> : <ArrowRightLeft className="w-4 h-4" />}
              {type === 'oneway' ? 'One Way' : 'Round Trip'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Form Container */}
      <motion.div 
        layout
        className="mt-6 bg-white rounded-3xl shadow-2xl border border-gray-100 relative"
      >
        <div className="bg-[#FFCC00] p-6 md:px-10 flex items-center justify-between rounded-t-3xl">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-taxi-dark">Book Your Ride</h2>
            <p className="text-sm font-medium text-taxi-dark/70">Professional, Reliable, Safe</p>
          </div>
          <div className="flex gap-4 opacity-50 hidden sm:flex">
             <ShieldCheck className="w-10 h-10" />
             <Navigation className="w-10 h-10" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">
          {/* Step 1: Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="space-y-4 relative">
              <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-primary" />
                Pick-up Location <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Enter pickup city or area"
                  required
                  value={pickup}
                  onChange={(e) => handleLocationSearch(e.target.value, 'pickup')}
                  onFocus={() => setActiveInput('pickup')}
                  className="w-full pl-5 pr-4 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium"
                />
                <AnimatePresence>
                  {activeInput === 'pickup' && suggestions.length > 0 && (
                    <motion.div 
                      ref={suggestionsRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-50 w-full bg-white border border-gray-100 shadow-2xl rounded-2xl mt-2 overflow-hidden ring-1 ring-black/5"
                    >
                      {suggestions.map(s => (
                        <button 
                          key={s} 
                          type="button" 
                          onClick={() => selectLocation(s)} 
                          className="w-full text-left px-5 py-4 hover:bg-primary/5 flex items-center gap-4 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-bold text-sm block">{s}</span>
                            <span className="text-[11px] text-gray-400 capitalize">Tamil Nadu, India</span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-4 relative">
              <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                <Navigation className="w-4 h-4 text-primary" />
                Drop Location <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Enter destination city"
                  required
                  value={drop}
                  onChange={(e) => handleLocationSearch(e.target.value, 'drop')}
                  onFocus={() => setActiveInput('drop')}
                  className="w-full pl-5 pr-4 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium"
                />
                <AnimatePresence>
                  {activeInput === 'drop' && suggestions.length > 0 && (
                    <motion.div 
                      ref={suggestionsRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-50 w-full bg-white border border-gray-100 shadow-2xl rounded-2xl mt-2 overflow-hidden ring-1 ring-black/5"
                    >
                      {suggestions.map(s => (
                        <button 
                          key={s} 
                          type="button" 
                          onClick={() => selectLocation(s)} 
                          className="w-full text-left px-5 py-4 hover:bg-primary/5 flex items-center gap-4 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-bold text-sm block">{s}</span>
                            <span className="text-[11px] text-gray-400 capitalize">Tamil Nadu, India</span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Step 2: Distance & Vehicle Selection */}
          <AnimatePresence>
            {distance && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-8 pt-6 overflow-hidden"
              >
                <div className="flex items-center justify-between bg-primary/5 p-6 rounded-3xl border border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                      <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Calculated Distance</p>
                      <h4 className="text-2xl font-black text-taxi-dark">{distance} KM</h4>
                    </div>
                  </div>
                  <div className="hidden sm:block h-10 w-[1px] bg-gray-200" />
                  <div className="hidden sm:flex items-center gap-4 text-right">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Estimate</div>
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                </div>

                  <div className="space-y-4">
                    {VEHICLES.map((v, index) => {
                      const price = calculatePrice(v.id);
                      const isSelected = selectedVehicle === v.id;
                      
                      return (
                        <div key={v.id} className="border-b border-gray-100 last:border-0 pb-4">
                          <div className={cn(
                            "flex flex-col md:flex-row items-center gap-6 p-4 rounded-3xl transition-all",
                            isSelected ? "bg-primary/10 ring-2 ring-primary/30" : "hover:bg-gray-50"
                          )}>
                            {/* Left: Image and Select Button */}
                            <div className="w-full md:w-1/3 flex flex-col gap-3">
                              <div className="h-40 rounded-2xl overflow-hidden shadow-md">
                                <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                              </div>
                              <button 
                                type="button"
                                onClick={() => setSelectedVehicle(v.id)}
                                className={cn(
                                  "w-full py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all",
                                  isSelected 
                                    ? "bg-primary text-primary-foreground shadow-lg" 
                                    : "bg-[#FFCC00] text-taxi-dark hover:shadow-lg"
                                )}
                              >
                                {isSelected ? "Selected" : "Select"}
                              </button>
                            </div>

                            {/* Right: Info and Price */}
                            <div className="flex-1 flex flex-col md:flex-row justify-between items-center w-full">
                              <div className="text-center md:text-left mb-4 md:mb-0">
                                <h4 className="text-xl font-black text-taxi-dark">{v.name}</h4>
                                <p className="text-sm text-gray-400 font-bold">({v.subTitle})</p>
                              </div>
                              <div className="text-center md:text-right">
                                <span className="text-3xl font-black text-sky-800">₹ {price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Estimate Section Card */}
                  {selectedVehicle && (
                    <div className="bg-white border rounded-lg p-10 text-center shadow-lg mt-10 relative overflow-hidden">
                      <div className="space-y-4">
                        <p className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">Estimate:</p>
                        <h3 className="text-5xl font-black text-sky-900">₹ {calculatePrice(selectedVehicle)}</h3>
                        <p className="text-xs text-gray-400 font-bold bg-gray-50 inline-block px-4 py-2 rounded-full">
                          Base charges + Driver Allowance Rs. 400
                        </p>
                        <div className="pt-4 border-t border-gray-50 max-w-2xl mx-auto">
                          <p className="text-[11px] leading-relaxed text-gray-400 font-medium">
                            *Inclusive of GST. The actual bill might differ based on actual distance travelled. 
                            Hill-station charges, inter-state permits, Toll, State permit and Parking charges are extra.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons as per screenshot */}
                  {selectedVehicle && (
                    <div className="grid grid-cols-2 gap-6 mt-10">
                      <button 
                        type="button" 
                        onClick={() => { setDistance(null); setSelectedVehicle(null); }}
                        className="bg-[#FF9900] text-white font-black py-5 rounded-xl uppercase tracking-widest text-base shadow-xl hover:scale-[1.02] transition-all"
                      >
                        Previous
                      </button>
                      <button 
                        type="button"
                        onClick={() => {
                            const contactSection = document.getElementById('contact-details');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-black text-white font-black py-5 rounded-xl uppercase tracking-widest text-base shadow-xl hover:scale-[1.02] transition-all"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
          </AnimatePresence>

          {/* Step 3: Detailed Form */}
          <AnimatePresence>
            {selectedVehicle && (
              <motion.div 
                id="contact-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10 pt-10 border-t border-gray-100 scroll-mt-10"
              >
                <div className="space-y-4">
                  <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                      <Phone className="w-4 h-4 text-primary" />
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit number"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-primary" />
                      Travel Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({...form, date: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-primary" />
                      Pickup Time
                    </label>
                    <div className="relative group">
                      <select
                        value={form.time}
                        onChange={(e) => setForm({...form, time: e.target.value})}
                        className="w-full appearance-none px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium cursor-pointer"
                      >
                        {timeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Additional Message (Optional)
                  </label>
                  <textarea
                    placeholder="Enter any special instructions or requests..."
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium min-h-[100px] resize-none"
                  />
                </div>

                {tripType === 'roundtrip' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-dashed border-gray-200"
                  >
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                        <Calendar className="w-4 h-4 text-primary" />
                        Return Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={form.returnDate}
                        onChange={(e) => setForm({...form, returnDate: e.target.value})}
                        className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 font-bold text-sm text-gray-700">
                        <Clock className="w-4 h-4 text-primary" />
                        Return Time
                      </label>
                      <div className="relative group">
                        <select
                          value={form.returnTime}
                          onChange={(e) => setForm({...form, returnTime: e.target.value})}
                          className="w-full appearance-none px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-gray-50/50 transition-all font-medium cursor-pointer"
                        >
                          {timeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="pt-6">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-taxi-dark text-white font-black py-6 rounded-3xl shadow-2xl shadow-taxi-dark/20 hover:bg-black transition-all uppercase tracking-[0.2em] text-lg flex items-center justify-center gap-4 group"
                  >
                    {isSubmitting ? "Processing..." : "Book Now"}
                  </motion.button>
                  <p className="text-center text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-[0.3em]">
                    INSTANT CONFIRMATION • NO HIDDEN CHARGES • 24/7 SUPPORT
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingForm;
