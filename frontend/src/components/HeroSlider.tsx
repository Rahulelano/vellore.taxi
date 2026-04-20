import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
    title: "Best Taxi Service in Vellore", 
    subtitle: "#1 Rated Local & Outstation Cab Service",
    badge: "24/7 Available"
  },
  { 
    image: chennai, 
    title: "Vellore to Chennai Taxi", 
    subtitle: "Comfortable One-Way Drops Starting from ₹2,300",
    badge: "Chennai Airport Special"
  },
  { 
    image: bengalore, 
    title: "Vellore to Bangalore", 
    subtitle: "Safe & Punctual Airport Transfers Every Day",
    badge: "Fixed Fares"
  },
  { 
    image: thirupathi, 
    title: "Vellore to Tirupati", 
    subtitle: "Divine Pilgrimage Packages for Your Family",
    badge: "Spiritual Hub"
  },
  { 
    image: pondycherry, 
    title: "Vellore to Pondicherry", 
    subtitle: "Weekend Beach Getaways with Premium Sedans",
    badge: "Vacation Special"
  },
  { 
    image: trichy, 
    title: "Vellore to Trichy", 
    subtitle: "Long Distance Travel Made Affordable and Safe",
    badge: "Best Rates"
  },
  { 
    image: thiruvannamalai, 
    title: "Vellore to Thiruvannamalai", 
    subtitle: "Professional Drivers for Short Distance Trips",
    badge: "Daily Service"
  },
  { 
    image: coimbatore, 
    title: "Vellore to Coimbatore", 
    subtitle: "Reliable Transport for Your Business Needs",
    badge: "Business Travels"
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToBooking = () => {
    const section = document.getElementById('booking-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img 
              src={heroSlides[currentSlide].image} 
              alt={heroSlides[currentSlide].title} 
              className="w-full h-full object-cover" 
              width={1920} 
              height={1080} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="relative container-narrow px-4 w-full pt-20 flex flex-col items-center md:items-start text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-[#FFCC00] text-black px-4 py-1 rounded-full text-xs font-bold mb-4 shadow-lg">
              {heroSlides[currentSlide].badge}
            </span>
            <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 uppercase italic">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl mb-8 font-medium">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToBooking}
                className="bg-[#FFCC00] text-black font-black px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider text-sm md:text-base group"
              >
                Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+919442030725"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-4 rounded-lg hover:bg-white/20 transition-all uppercase tracking-wider text-sm md:text-base"
              >
                Call Support
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'w-10 bg-[#FFCC00]' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
