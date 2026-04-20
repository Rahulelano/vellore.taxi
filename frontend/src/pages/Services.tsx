import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';
import { Link } from 'react-router-dom';
import { Car, MapPin, Plane, Building, Users, Clock } from 'lucide-react';

const allServices = [
  { icon: Car, title: 'Local Taxi Service', desc: 'Quick and affordable city rides across Vellore. From CMC Hospital to VIT, Vellore Fort to Katpadi — get there comfortably.', link: '/local-taxi' },
  { icon: MapPin, title: 'Outstation Taxi', desc: 'Travel to Chennai, Bangalore, Tirupati, Pondicherry and more in our comfortable outstation cabs with experienced drivers.', link: '/outstation-taxi' },
  { icon: Plane, title: 'Airport Taxi', desc: 'Reliable airport pickup & drop for Chennai International Airport and Kempegowda International Airport, Bangalore.', link: '/airport-taxi' },
  { icon: Building, title: 'Corporate Cab Service', desc: 'Tailored transportation solutions for businesses in Vellore with monthly billing and dedicated fleet.', link: '/contact' },
  { icon: Users, title: 'Tour Packages', desc: 'Explore Vellore and nearby tourist destinations with our curated tour packages including Yelagiri, Tirupati, and more.', link: '/contact' },
  { icon: Clock, title: 'Hourly Rental', desc: 'Rent a cab by the hour for meetings, shopping, hospital visits, or personal errands within Vellore city.', link: '/tariff' },
];

const faqs = [
  { q: 'What types of taxis are available?', a: 'We offer Sedan (Swift Dzire, Etios), SUV (Innova, Ertiga), and Premium cars for all needs and budgets.' },
  { q: 'Can I book a taxi for a round trip?', a: 'Yes! We offer both one-way and round-trip options for outstation and airport taxi services.' },
  { q: 'Do you provide taxi service to hospitals in Vellore?', a: 'Absolutely. We frequently serve CMC Hospital, Naruvi Hospital, and other medical facilities in Vellore.' },
];

const Services = () => (
  <Layout>
    <SEO title="Taxi Services in Vellore | Local, Outstation, Airport" description="Explore our complete taxi services in Vellore — local city rides, outstation trips, airport transfers, corporate cabs & tour packages. Book now!" />

    <HeroSlider />

    <section className="section-padding">
      <div className="container-narrow grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((s, i) => (
          <Link key={i} to={s.link} className="bg-card border rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all group">
            <s.icon className="w-10 h-10 text-primary mb-4" />
            <h2 className="font-display font-bold text-xl mb-2">{s.title}</h2>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </Link>
        ))}
      </div>
    </section>

    <FAQ items={faqs} />
    <CTABanner />
  </Layout>
);

export default Services;
