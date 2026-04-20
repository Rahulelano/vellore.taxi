import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';
import { Users, Award, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Customers', value: '10,000+' },
  { icon: Award, label: 'Years of Service', value: '8+' },
  { icon: Clock, label: 'Available', value: '24/7' },
  { icon: Heart, label: 'Trips Completed', value: '50,000+' },
];

const faqs = [
  { q: 'How long has VELLORE.TAXI been in service?', a: 'We have been serving Vellore and surrounding areas for over 8 years with an impeccable safety record.' },
  { q: 'Are your drivers experienced?', a: 'Yes, all our drivers have 5+ years of driving experience and undergo regular safety training.' },
  { q: 'Do you offer corporate taxi services?', a: 'Yes, we provide corporate cab solutions for businesses in Vellore with monthly billing options.' },
];

const About = () => (
  <Layout>
    <SEO title="About Us - VELLORE.TAXI | Trusted Cab Service" description="Learn about VELLORE.TAXI — Vellore's most trusted taxi service with 8+ years of experience, verified drivers, and 10,000+ happy customers." />

    <HeroSlider />

    <section className="section-padding">
      <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center bg-card border rounded-xl p-8">
            <s.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="font-display font-bold text-3xl mb-1">{s.value}</p>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-narrow max-w-3xl">
        <h2 className="font-display font-bold text-3xl mb-6">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          At VELLORE.TAXI, we believe everyone deserves access to safe and affordable transportation. Our fleet of well-maintained vehicles and professionally trained drivers ensure that every journey — whether it's a short trip within Vellore city or an outstation ride to Chennai, Bangalore, or Tirupati — is comfortable and hassle-free.
        </p>
        <h2 className="font-display font-bold text-3xl mb-6">What Sets Us Apart</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> GPS-tracked vehicles for complete safety</li>
          <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Transparent pricing — no hidden charges</li>
          <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Well-maintained, air-conditioned cars</li>
          <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Courteous, English and Tamil speaking drivers</li>
          <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Serving Vellore Fort, Katpadi, Sathuvachari, Bagayam & all areas</li>
        </ul>
      </div>
    </section>

    <FAQ items={faqs} />
    <CTABanner />
  </Layout>
);

export default About;
