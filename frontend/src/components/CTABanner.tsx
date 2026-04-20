import { Phone, MessageCircle } from 'lucide-react';

const CTABanner = () => (
  <section className="bg-secondary text-secondary-foreground section-padding">
    <div className="container-narrow text-center">
      <h2 className="font-display font-bold text-3xl mb-4">Ready to Book Your Ride?</h2>
      <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">
        Available 24/7 for local, outstation, and airport taxi service in Vellore. Call or WhatsApp us now!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="tel:+919442030725" className="cta-call"><Phone className="w-4 h-4" /> Call +91 94420 30725</a>
        <a href="https://wa.me/919442030725" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
          <MessageCircle className="w-4 h-4" /> WhatsApp Booking
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;
