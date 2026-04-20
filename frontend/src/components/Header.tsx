import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/tariff', label: 'Tariff' },
    { to: '/contact', label: 'Contact' },
    { to: '/blog', label: 'Blog' },
  ];

  const serviceLinks = [
    { to: '/local-taxi', label: 'Local Taxi' },
    { to: '/outstation-taxi', label: 'Outstation' },
    { to: '/airport-taxi', label: 'Airport Taxi' },
    { to: '/oneway-roundtrip', label: 'One Way / Round Trip' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg h-20' : 'bg-white h-24'}`}>
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Vellore Taxi Logo" className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`} />
        </Link>

        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((l) => (
            <div key={l.to} className="relative group">
              <Link
                to={l.to}
                className={`px-4 py-2 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all ${
                  location.pathname === l.to
                    ? 'bg-[#FFCC00] text-black'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {l.label}
                {l.label === 'Services' && <ChevronDown className="inline w-3 h-3 ml-1" />}
              </Link>
              
              {l.label === 'Services' && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-xl py-4 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 border-t-4 border-[#FFCC00]">
                  {serviceLinks.map(sl => (
                    <Link 
                      key={sl.to} 
                      to={sl.to} 
                      className="block px-6 py-3 text-xs font-bold text-gray-700 hover:bg-[#FFCC00]/10 hover:text-black transition-colors"
                    >
                      {sl.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919442030725" className="hidden lg:flex items-center gap-3 bg-[#f57c00] text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-[#f57c00]/20">
            <Phone className="w-4 h-4" /> <span>Call Now</span>
          </a>

          <button onClick={() => setOpen(!open)} className="xl:hidden p-2 text-gray-800" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 border-b-2 border-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="xl:hidden absolute top-full left-0 w-full bg-white border-t-2 border-gray-100 shadow-2xl px-6 py-8 space-y-4 max-h-[85vh] overflow-y-auto">
          {navLinks.map((l) => (
            <div key={l.to}>
              <Link
                to={l.to}
                onClick={() => l.label !== 'Services' && setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest ${
                  location.pathname === l.to ? 'bg-[#FFCC00] text-black' : 'text-gray-700'
                }`}
              >
                {l.label}
              </Link>
              {l.label === 'Services' && (
                <div className="pl-6 pt-2 space-y-3">
                  {serviceLinks.map(sl => (
                    <Link key={sl.to} to={sl.to} onClick={() => setOpen(false)} className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                      • {sl.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="tel:+919442030725" className="flex items-center justify-center gap-3 bg-[#f57c00] text-white py-4 rounded-xl font-bold text-sm">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
