import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-narrow section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <img src={logo} alt="Vellore Taxi Logo" className="h-24 w-auto object-contain mb-4" />
        <p className="text-secondary-foreground/70 text-sm leading-relaxed">
          Vellore's most trusted taxi service. Available 24/7 for local rides, outstation trips, and airport transfers.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-secondary-foreground/70">
          {[
            ['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'],
            ['/oneway-roundtrip', 'One Way/Round Trip'], ['/tariff', 'Tariff'],
            ['/contact', 'Contact Us'], ['/blog', 'Blog'],
          ].map(([to, label]) => (
            <li key={to}><Link to={to} className="hover:text-primary transition-colors">{label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Our Services</h4>
        <ul className="space-y-2 text-sm text-secondary-foreground/70">
          <li><Link to="/local-taxi" className="hover:text-primary transition-colors">Local Taxi Vellore</Link></li>
          <li><Link to="/outstation-taxi" className="hover:text-primary transition-colors">Outstation Taxi</Link></li>
          <li><Link to="/airport-taxi" className="hover:text-primary transition-colors">Airport Taxi</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Contact Info</h4>
        <ul className="space-y-3 text-sm text-secondary-foreground/70">
          <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> +91 94420 30725</li>
          <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> booking@vellore.taxi</li>
          <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Vellore, Tamil Nadu, India</li>
          <li className="mt-4 pt-4 border-t border-secondary-foreground/10 text-xs font-semibold">
            GST: 33LONPS8700M1Z3
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10 text-center py-6 text-xs text-secondary-foreground/50">
      © {new Date().getFullYear()} — All Rights Reserved. Best Taxi Service in Vellore.
    </div>
  </footer>
);

export default Footer;
