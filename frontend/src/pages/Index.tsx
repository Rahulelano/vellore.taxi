import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, MapPin, Plane, Shield, Clock, IndianRupee, Phone, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import BookingForm from '@/components/BookingForm';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';
import logo from '@/assets/logo.png';
import vellore from '@/assets/vellore.jpg';
import trichy from '@/assets/trichy.jpg';
import thiruvannamalai from '@/assets/thiruvannamalai.jpg';
import thirupathi from '@/assets/thirupathi.jpg';
import pondycherry from '@/assets/pondycherry.jpg';
import coimbatore from '@/assets/coimbatore.jpg';
import chennai from '@/assets/chennai.jpg';
import bengalore from '@/assets/bengalore.jpg';

const heroSlides = [
  {
    image: vellore,
    title: 'Vellore Fort',
    subtitle: '#1 Taxi Service in Vellore',
    badge: 'Local Pride'
  },
  {
    image: chennai,
    title: 'Chennai City',
    subtitle: 'Comfortable Outstation Trips',
    badge: 'Metropolitan'
  },
  {
    image: bengalore,
    title: 'Bangalore Outstation',
    subtitle: 'Safe & Reliable Airport Transfers',
    badge: 'Tech Hub'
  },
  {
    image: thirupathi,
    title: 'Tirupati Balaji',
    subtitle: 'Special Pilgrimage Packages',
    badge: 'Spiritual'
  },
  {
    image: pondycherry,
    title: 'Pondicherry Beaches',
    subtitle: 'Enjoy Your Weekend Getaways',
    badge: 'Vacation'
  },
  {
    image: trichy,
    title: 'Trichy Rockfort',
    subtitle: 'Best Long Distance Fares',
    badge: 'Heritage'
  },
  {
    image: thiruvannamalai,
    title: 'Thiruvannamalai',
    subtitle: 'Professional & Punctual Drivers',
    badge: 'Pilgrimage'
  },
  {
    image: coimbatore,
    title: 'Coimbatore Travels',
    subtitle: 'Your Trusted Travel Partner',
    badge: 'Industrial Hub'
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "VELLORE.TAXI",
  "description": "Best taxi service in Vellore. 24/7 cab booking for local, outstation, and airport transfers.",
  "url": "https://vellore.taxi",
  "telephone": "+919442030725",
  "address": { "@type": "PostalAddress", "addressLocality": "Vellore", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
  "areaServed": "Vellore",
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 00:00-23:59",
};

const services = [
  { icon: Car, title: 'Local Taxi', desc: 'Affordable city rides across Vellore — CMC, VIT, Fort & more.', link: '/local-taxi' },
  { icon: MapPin, title: 'Outstation Taxi', desc: 'Comfortable trips to Chennai, Bangalore, Tirupati & beyond.', link: '/outstation-taxi' },
  { icon: Plane, title: 'Airport Taxi', desc: 'Reliable Chennai & Bangalore airport pickup and drop service.', link: '/airport-taxi' },
];

const whyUs = [
  { icon: Shield, title: 'Safe & Verified Drivers', desc: 'All drivers are professionally trained and background-verified.' },
  { icon: Clock, title: '24/7 Availability', desc: 'Book a taxi anytime — day or night, rain or shine.' },
  { icon: IndianRupee, title: 'Affordable Pricing', desc: 'Transparent fares with no hidden charges. Best rates in Vellore.' },
];

const routes = [
  { from: 'Vellore', to: 'Chennai', dist: '130 km', time: '~3 hrs' },
  { from: 'Vellore', to: 'Bangalore', dist: '220 km', time: '~4 hrs' },
  { from: 'Vellore', to: 'Tirupati', dist: '110 km', time: '~2.5 hrs' },
  { from: 'Vellore', to: 'Pondicherry', dist: '170 km', time: '~3.5 hrs' },
];

const faqs = [
  { q: 'How do I book a taxi in Vellore?', a: 'You can book via our website, by calling +91 94420 30725, or through WhatsApp. We offer instant booking confirmation.' },
  { q: 'What are your taxi rates in Vellore?', a: 'Our rates start from ₹13/km for local rides. Outstation and airport trips have special packages. Check our Tariff page for details.' },
  { q: 'Do you provide 24/7 taxi service?', a: 'Yes! VELLORE.TAXI operates round the clock — 24 hours, 7 days a week including holidays.' },
  { q: 'Which areas do you cover in Vellore?', a: 'We cover all areas including CMC Hospital, VIT University, Vellore Fort, Sathuvachari, Katpadi, and surrounding towns.' },
  { q: 'Is your taxi service safe for women?', a: 'Absolutely. All our drivers are verified, and we offer GPS-tracked rides for complete safety.' },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Best Taxi Service in Vellore | 24/7 Cab Booking - VELLORE.TAXI"
        description="Book the best taxi in Vellore for local rides, outstation trips & airport transfers. Affordable rates, safe drivers, 24/7 service. Call now!"
        canonical="https://vellore.taxi"
        schema={localBusinessSchema}
      />

      {/* Hero */}
      <HeroSlider />

      {/* Booking Section */}
      <section id="booking-section" className="bg-secondary/5 py-16">
        <div className="container-narrow px-4 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl z-10"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="font-display font-bold text-3xl text-center mb-4">Our Taxi Services in Vellore</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          From quick city rides to long-distance journeys — we've got you covered with the best cab service in Vellore.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={s.link} className="block bg-card border rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all group">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-accent">
      <div className="container-narrow">
        <h2 className="font-display font-bold text-3xl text-center mb-12">Why Choose VELLORE.TAXI?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whyUs.map((w, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <w.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-sm">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Routes */}
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="font-display font-bold text-3xl text-center mb-4">Popular Taxi Routes from Vellore</h2>
        <p className="text-muted-foreground text-center mb-10">Book outstation cabs at the best rates</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[...routes, { from: 'Vellore', to: 'Tiruvannamalai', dist: '85 km', time: '~2 hrs' }].map((r, i) => (
            <div key={i} className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <img src={logo} alt="" className="w-24 h-24 object-contain" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center p-1.5 flex-shrink-0">
                  <img src={logo} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="font-semibold text-sm whitespace-nowrap">{r.to}</span>
              </div>
              <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold mb-1">From {r.from}</p>
              <div className="space-y-1">
                <p className="text-muted-foreground text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {r.time}
                </p>
                <p className="text-muted-foreground text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {r.dist}
                </p>
              </div>
              <Link to="/tariff" className="text-primary text-xs font-semibold mt-4 inline-block hover:underline">View Fare →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Testimonials />
    <FAQ items={faqs} />
    <CTABanner />
  </Layout>
  );
};

export default Index;
