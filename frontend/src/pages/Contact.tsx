import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

const faqs = [
  { q: 'What is the best way to contact VELLORE.TAXI?', a: 'You can call us at +91 94420 30725, WhatsApp us, or fill the booking form. We respond within minutes!' },
  { q: 'Where is your office located?', a: 'Our main office is in Vellore city center, but you can book from anywhere — we pick up from any location in Vellore.' },
  { q: 'What are your operating hours?', a: 'We operate 24 hours a day, 7 days a week, including all holidays.' },
];

const Contact = () => (
  <Layout>
    <SEO title="Contact VELLORE.TAXI | Book a Cab in Vellore" description="Contact VELLORE.TAXI for taxi booking in Vellore. Call, WhatsApp, or fill our booking form. Available 24/7 for all your travel needs." />

    <HeroSlider />

    <section id="booking-section" className="section-padding">
      <div className="container-narrow grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-bold text-2xl mb-6">Get in Touch</h2>
          <div className="space-y-6">
            {[
              { icon: Phone, label: 'Phone', value: '+91 94420 30725', href: 'tel:+919442030725' },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919442030725' },
              { icon: Mail, label: 'Email', value: 'booking@vellore.taxi', href: 'mailto:booking@vellore.taxi' },
              { icon: MapPin, label: 'Location', value: 'Vellore, Tamil Nadu, India', href: undefined },
              { icon: Clock, label: 'Hours', value: '24/7 — Always Available', href: undefined },
              { icon: ShieldCheck, label: 'GST Number', value: '33LONPS8700M1Z3', href: undefined },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <BookingForm />
      </div>
    </section>

    <FAQ items={faqs} />
  </Layout>
);

export default Contact;
