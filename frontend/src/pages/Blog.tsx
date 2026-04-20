import HeroSlider from '@/components/HeroSlider';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'best-taxi-service-vellore',
    title: 'Best Taxi Service in Vellore — Why VELLORE.TAXI Leads',
    excerpt: 'Discover why thousands choose VELLORE.TAXI for safe, affordable, and reliable taxi rides in Vellore city and beyond.',
    date: '2025-03-15',
  },
  {
    slug: 'vellore-to-chennai-travel-guide',
    title: 'Vellore to Chennai Travel Guide — Routes, Tips & Fare',
    excerpt: 'Complete guide for travelling from Vellore to Chennai by taxi. Best routes, travel time, fare estimates, and booking tips.',
    date: '2025-03-10',
  },
  {
    slug: 'airport-taxi-tips-vellore',
    title: 'Airport Taxi Tips from Vellore — Save Time & Money',
    excerpt: 'Expert tips for booking airport taxi from Vellore to Chennai and Bangalore airports. Avoid common mistakes and save money.',
    date: '2025-03-05',
  },
  {
    slug: 'affordable-cab-booking-vellore',
    title: 'Affordable Cab Booking in Vellore — Complete Price Guide',
    excerpt: 'How to book the most affordable cab in Vellore. Compare rates, find deals, and get the best value for your taxi ride.',
    date: '2025-02-28',
  },
  {
    slug: 'top-tourist-places-vellore',
    title: 'Top Tourist Places in Vellore — Visit by Taxi',
    excerpt: 'Explore the best tourist attractions in Vellore including Vellore Fort, Jalakandeswarar Temple, Yelagiri Hills, and more.',
    date: '2025-02-20',
  },
];

const Blog = () => (
  <Layout>
    <SEO title="Blog - Vellore Taxi Travel Tips & Guides" description="Read our latest blog posts about taxi services, travel guides, and tips for travelling in and around Vellore, Tamil Nadu." />

    <HeroSlider />

    <section className="section-padding">
      <div className="container-narrow grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="bg-primary/10 h-48 flex items-center justify-center">
              <span className="text-primary font-display font-bold text-lg px-4 text-center">{p.title}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                <Calendar className="w-3 h-3" /> {new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <h2 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="text-muted-foreground text-sm mb-3">{p.excerpt}</p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1">Read More <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Blog;
