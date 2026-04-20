import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import BookingForm from '@/components/BookingForm';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';
import { Plane, Clock, Shield, IndianRupee } from 'lucide-react';

const airports = [
  { name: 'Chennai International Airport (MAA)', dist: '130 km from Vellore', fare: 'Sedan: ₹2,300 | SUV: ₹3,500', time: '~3 hrs' },
  { name: 'Kempegowda International Airport, Bangalore (BLR)', dist: '220 km from Vellore', fare: 'Sedan: ₹4,500 | SUV: ₹7,500', time: '~4.5 hrs' },
  { name: 'Tirupati Airport (TIR)', dist: '110 km from Vellore', fare: 'Sedan: ₹3,500 | SUV: ₹5,000', time: '~2.5 hrs' },
];

const benefits = [
  { icon: Clock, text: 'On-time pickup — we track your flight status' },
  { icon: Shield, text: 'Verified, experienced drivers for highway travel' },
  { icon: IndianRupee, text: 'Fixed fare — no surge pricing or hidden charges' },
  { icon: Plane, text: 'Available for all flights — early morning or late night' },
];

const faqs = [
  { q: 'How do I book a Vellore to Chennai airport taxi?', a: 'Simply call us, WhatsApp, or use the booking form on this page. We recommend booking at least 4 hours in advance.' },
  { q: 'Do you track flight arrivals?', a: 'Yes, we monitor your flight status and adjust pickup time accordingly — no extra charge for flight delays.' },
  { q: 'What if my flight is delayed?', a: 'We offer 45 minutes of free waiting time at the airport. Additional waiting is charged at ₹100/hour.' },
  { q: 'Can I book an airport taxi for early morning flights?', a: 'Absolutely! We operate 24/7 including early morning and late night airport transfers.' },
];

const AirportTaxi = () => (
  <Layout>
    <SEO title="Vellore Airport Taxi | Chennai & Bangalore Airport Cab" description="Book reliable airport taxi from Vellore to Chennai & Bangalore airports. Fixed fares, flight tracking, 24/7 service. Book now!" />

    <HeroSlider />

    <section id="booking-section" className="section-padding">
      <div className="container-narrow grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-bold text-2xl mb-6">Airport Transfer Options</h2>
          <div className="space-y-4 mb-8">
            {airports.map((a) => (
              <div key={a.name} className="border rounded-xl p-6 bg-card">
                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{a.name}</h3>
                    <p className="text-muted-foreground text-sm">{a.dist} · {a.time}</p>
                    <p className="text-primary font-bold text-sm mt-1">{a.fare}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="font-display font-bold text-xl mb-4">Why Choose Our Airport Taxi?</h3>
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <b.icon className="w-5 h-5 text-primary flex-shrink-0" /> {b.text}
              </li>
            ))}
          </ul>
        </div>
        <BookingForm />
      </div>
    </section>

    <FAQ items={faqs} />
    <CTABanner />
  </Layout>
);

export default AirportTaxi;
