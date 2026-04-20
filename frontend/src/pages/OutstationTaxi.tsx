import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import BookingForm from '@/components/BookingForm';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';
import { Link } from 'react-router-dom';

const routes = [
  { to: 'Chennai', dist: '130 km', fare: '₹2,300', time: '3 hrs' },
  { to: 'Bangalore', dist: '220 km', fare: '₹4,500', time: '4 hrs' },
  { to: 'Tirupati', dist: '110 km', fare: '₹3,500', time: '2.5 hrs' },
  { to: 'Pondicherry', dist: '170 km', fare: '₹3,500', time: '3.5 hrs' },
  { to: 'Coimbatore', dist: '380 km', fare: '₹7,000', time: '6 hrs' },
  { to: 'Trichy', dist: '280 km', fare: '₹4,500', time: '4.5 hrs' },
];

const faqs = [
  { q: 'What is the fare for Vellore to Chennai taxi?', a: 'Vellore to Chennai one-way taxi starts from ₹2,300 in a sedan. Round trip and SUV options are also available.' },
  { q: 'Can I book a one-way outstation taxi?', a: 'Yes, we offer both one-way and round-trip outstation taxi services from Vellore.' },
  { q: 'Are toll and parking charges included?', a: 'Toll charges are extra and paid directly. Parking charges, if any, are also borne by the passenger.' },
  { q: 'What cars are available for outstation trips?', a: 'We offer Sedan (Swift Dzire), SUV (Toyota Innova), and Premium cars for outstation travel.' },
];

const OutstationTaxi = () => (
  <Layout>
    <SEO title="Outstation Taxi from Vellore | Chennai, Bangalore Cab" description="Book outstation taxi from Vellore to Chennai, Bangalore, Tirupati & more. One-way & round trip. Affordable rates, experienced drivers." />

    <HeroSlider />

    <section id="booking-section" className="section-padding">
      <div className="container-narrow grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-bold text-2xl mb-4">Popular Outstation Routes</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Planning a trip from Vellore? Our outstation taxi service connects you to Chennai, Bangalore, Tirupati, Pondicherry, and many more destinations with experienced drivers and well-maintained vehicles.
          </p>
          <div className="space-y-3">
            {routes.map((r) => (
              <div key={r.to} className="flex items-center justify-between border rounded-lg p-4 bg-card">
                <div>
                  <p className="font-semibold text-sm">Vellore → {r.to}</p>
                  <p className="text-muted-foreground text-xs">{r.dist} · {r.time}</p>
                </div>
                <span className="text-primary font-bold text-sm">From {r.fare}</span>
              </div>
            ))}
          </div>
          <Link to="/tariff" className="text-primary font-semibold text-sm mt-4 inline-block">View Full Tariff →</Link>
        </div>
        <BookingForm />
      </div>
    </section>

    <FAQ items={faqs} />
    <CTABanner />
  </Layout>
);

export default OutstationTaxi;
