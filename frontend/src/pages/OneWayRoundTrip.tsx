import { useState } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { ArrowRight, Car, MapPin, Info } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import logo from '@/assets/logo.png';

const routeData = [
  { 
    id: 'chennai', 
    name: 'Chennai', 
    dist: '130 km',
    oneWay: { sedan: '₹2,300', suv: '₹3,500' },
    roundTrip: { sedan: '₹4,000', suv: '₹6,000' }
  },
  { 
    id: 'bangalore', 
    name: 'Bangalore', 
    dist: '220 km',
    oneWay: { sedan: '₹4,500', suv: '₹7,500' },
    roundTrip: { sedan: '₹7,500', suv: '₹12,000' }
  },
  { 
    id: 'tirupati', 
    name: 'Tirupati', 
    dist: '110 km',
    oneWay: { sedan: '₹3,500', suv: '₹5,000' },
    roundTrip: { sedan: '₹5,500', suv: '₹8,000' }
  },
  { 
    id: 'pondicherry', 
    name: 'Pondicherry', 
    dist: '170 km',
    oneWay: { sedan: '₹3,500', suv: '₹5,000' },
    roundTrip: { sedan: '₹6,000', suv: '₹8,500' }
  },
  { 
    id: 'coimbatore', 
    name: 'Coimbatore', 
    dist: '380 km',
    oneWay: { sedan: '₹7,000', suv: '₹8,500' },
    roundTrip: { sedan: '₹14,000', suv: '₹17,000' }
  },
  { 
    id: 'trichy', 
    name: 'Trichy', 
    dist: '280 km',
    oneWay: { sedan: '₹4,500', suv: '₹6,000' },
    roundTrip: { sedan: '₹9,000', suv: '₹12,000' }
  },
  { 
    id: 'tiruvannamalai', 
    name: 'Tiruvannamalai', 
    dist: '85 km',
    oneWay: { sedan: '₹2,300', suv: '₹3,500' },
    roundTrip: { sedan: '₹3,800', suv: '₹5,500' }
  },
];

const faqs = [
  { q: 'What is the difference between One Way and Round Trip?', a: 'One Way is a drop-only service where you pay only for the trip from Vellore to your destination. Round Trip includes the return journey and is charged based on the total distance travelled (both ways).' },
  { q: 'Are there any hidden charges in One Way?', a: 'No, we provide fixed fares for One Way drops. Toll and parking charges are extra as per actuals.' },
  { q: 'Which is more economical for a day trip?', a: 'For a day trip where you return the same day, a Round Trip package is usually more economical as it has a lower per-km rate compared to a one-way fixed drop.' },
];

const OneWayRoundTrip = () => {
  const [selectedRoute, setSelectedRoute] = useState(routeData[0]);

  return (
    <Layout>
      <SEO 
        title="One Way vs Round Trip Pricing | Vellore Taxi Fares" 
        description="Compare One Way drop and Round Trip fares from Vellore to Chennai, Bangalore, Coimbatore & more. Transparent pricing with Vellore Wheels." 
      />

      <HeroSlider />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Sidebar with locations */}
            <div className="lg:col-span-4 space-y-2">
              <h2 className="font-display font-bold text-xl mb-4">Select Destination</h2>
              {routeData.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRoute(r)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    selectedRoute.id === r.id 
                    ? 'bg-primary border-primary text-primary-foreground shadow-lg' 
                    : 'bg-card hover:border-primary/50 text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${selectedRoute.id === r.id ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className="font-semibold">Vellore to {r.name}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${selectedRoute.id === r.id ? 'translate-x-1' : 'group-hover:translate-x-1 opacity-50'}`} />
                </button>
              ))}
            </div>

            {/* Price Display Area */}
            <div className="lg:col-span-8">
              <div className="bg-card border rounded-2xl shadow-xl p-8 sticky top-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 -mr-8 -mt-8 pointer-events-none">
                  <img src={logo} alt="" className="w-64 h-64 object-contain" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-display font-bold text-3xl mb-1">Vellore <ArrowRight className="inline w-6 h-6 text-primary" /> {selectedRoute.name}</h2>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Distance: {selectedRoute.dist} (One Way)
                    </p>
                  </div>
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm text-center">
                    Instant Booking: +91 94420 30725
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* One Way Card */}
                  <div className="bg-accent rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-xl">One Way Drop</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end border-b pb-4">
                        <span className="text-muted-foreground font-medium">Sedan</span>
                        <span className="text-2xl font-bold text-primary">{selectedRoute.oneWay.sedan}</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-muted-foreground font-medium">SUV (Innova)</span>
                        <span className="text-2xl font-bold text-primary">{selectedRoute.oneWay.suv}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-4 flex items-center gap-1 uppercase tracking-wider font-bold">
                      <Info className="w-3 h-3" /> Includes Driver Beta & fuel
                    </p>
                  </div>

                  {/* Round Trip Card */}
                  <div className="bg-secondary text-secondary-foreground rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-xl">Round Trip</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end border-b border-secondary-foreground/10 pb-4">
                        <span className="text-secondary-foreground/70 font-medium">Sedan</span>
                        <span className="text-2xl font-bold text-primary">{selectedRoute.roundTrip.sedan}</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-secondary-foreground/70 font-medium">SUV (Innova)</span>
                        <span className="text-2xl font-bold text-primary">{selectedRoute.roundTrip.suv}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-secondary-foreground/50 mt-4 flex items-center gap-1 uppercase tracking-wider font-bold">
                      <Info className="w-3 h-3" /> Estimated for same day return
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg text-xs text-muted-foreground">
                  * Toll charges, State Permit, and Parking fees are extra. Pricing may vary slightly based on specific pickup/drop locations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <CTABanner />
    </Layout>
  );
};

export default OneWayRoundTrip;
