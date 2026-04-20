import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import BookingForm from '@/components/BookingForm';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';
import { MapPin } from 'lucide-react';

const areas = [
  'CMC Hospital', 'VIT University', 'Vellore Fort', 'Katpadi Junction',
  'Sathuvachari', 'Bagayam', 'Thorapadi', 'Gandhi Nagar',
  'Kosapet', 'Vellore Bus Stand', 'Naruvi Hospital', 'Voorhees College',
];

const faqs = [
  { q: 'What is the minimum fare for local taxi in Vellore?', a: 'Our local taxi service starts at just ₹350 for city rides in a sedan.' },
  { q: 'Can I book a taxi for hourly rental in Vellore?', a: 'Yes, we offer flexible rental packages starting from ₹999 for SUVs.' },
  { q: 'Do you cover Katpadi railway station?', a: 'Yes, Katpadi is one of our most popular pickup/drop points. We provide 24/7 service to and from Katpadi Junction.' },
  { q: 'Is there extra charge for night rides?', a: 'A nominal night surcharge of 10% applies between 10 PM and 6 AM.' },
];

const LocalTaxi = () => (
  <Layout>
    <SEO title="Local Taxi in Vellore | City Cab Rides – VELLORE.TAXI" description="Book affordable local taxi in Vellore for city rides. Quick pickup, safe drivers, AC cabs. Covering CMC, VIT, Fort, Katpadi & all areas." />

    <HeroSlider />

    <section id="booking-section" className="section-padding">
      <div className="container-narrow grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-bold text-2xl mb-4">Affordable Vellore City Rides</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            VELLORE.TAXI offers the most reliable local cab service in Vellore. Whether you're heading to a hospital appointment at CMC, dropping your child at VIT, or visiting the historic Vellore Fort — our clean, air-conditioned taxis are just a call away.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We serve all major areas including Sathuvachari, Bagayam, Thorapadi, Gandhi Nagar, Kosapet, and more. With transparent pricing starting at just ₹13/km, you always know what you'll pay.
          </p>
          <h3 className="font-display font-bold text-xl mb-4">Areas We Cover</h3>
          <div className="grid grid-cols-2 gap-2">
            {areas.map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3 text-primary flex-shrink-0" /> {a}
              </div>
            ))}
          </div>
        </div>
        <BookingForm />
      </div>
    </section>

    <FAQ items={faqs} />
    <CTABanner />
  </Layout>
);

export default LocalTaxi;
