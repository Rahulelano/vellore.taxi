import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';

const blogData: Record<string, { title: string; seoTitle: string; description: string; content: string[]; faqs: { q: string; a: string }[] }> = {
  'best-taxi-service-vellore': {
    title: 'Best Taxi Service in Vellore — Why VELLORE.TAXI Leads',
    seoTitle: 'Best Taxi Service in Vellore | VELLORE.TAXI',
    description: 'Discover why VELLORE.TAXI is the best taxi service in Vellore with affordable rates, safe drivers, and 24/7 availability.',
    content: [
      'When it comes to finding a reliable taxi service in Vellore, VELLORE.TAXI stands out as the clear leader. With over 8 years of experience serving the Vellore community, we have built a reputation for safety, affordability, and dependability.',
      'Vellore is a bustling city known for its world-class medical institutions like CMC Hospital, prestigious educational institutions like VIT University, and rich historical heritage including the magnificent Vellore Fort. Getting around this vibrant city requires a taxi service that understands the local landscape.',
      'What makes VELLORE.TAXI the best choice? First, our drivers are all locally trained professionals who know every street, shortcut, and landmark in Vellore. Whether you need to reach the Naruvi Hospital in a hurry or want a scenic route past the Jalakandeswarar Temple, our drivers deliver.',
      'Second, our pricing is the most transparent and competitive in the region. Starting at just ₹13 per kilometre for sedan rides, we ensure you never pay more than you should. No surge pricing, no hidden charges — just honest fares.',
      'Third, we are available 24/7, 365 days a year. Whether it\'s a 3 AM hospital emergency or a 6 PM airport pickup, VELLORE.TAXI is always ready to serve you.',
      'Our fleet includes well-maintained sedans like Swift Dzire and Toyota Etios, SUVs like Innova and Ertiga, and premium vehicles for special occasions. Every car is regularly serviced, sanitized, and air-conditioned for your comfort.',
    ],
    faqs: [
      { q: 'Why is VELLORE.TAXI considered the best?', a: 'With 8+ years of experience, 10,000+ happy customers, verified drivers, and the most affordable rates in Vellore, we are the top-rated taxi service.' },
      { q: 'How can I book the best taxi in Vellore?', a: 'Call +91 94420 30725, WhatsApp us, or use our website booking form for instant confirmation.' },
    ],
  },
  'vellore-to-chennai-travel-guide': {
    title: 'Vellore to Chennai Travel Guide — Routes, Tips & Fare',
    seoTitle: 'Vellore to Chennai Taxi Guide | Routes & Fares',
    description: 'Complete travel guide for Vellore to Chennai by taxi. Best routes, travel time, estimated fares, and expert booking tips.',
    content: [
      'The journey from Vellore to Chennai is one of the most popular routes in Tamil Nadu. Whether you are travelling for medical treatment, business, education, or to catch a flight at Chennai International Airport, a taxi is the most comfortable and convenient option.',
      'The distance from Vellore to Chennai is approximately 140 kilometres via NH48 (now NH44). The journey typically takes 2.5 to 3.5 hours depending on traffic conditions. The route passes through Ranipet, Sriperumbudur, and Kanchipuram bypass.',
      'Route Options: The fastest route is via NH44 through Katpadi, Ranipet, and then joining the Chennai-Bangalore Highway. An alternative scenic route goes through Kanchipuram, adding about 30 minutes but offering views of beautiful temples and countryside.',
      'Fare Estimates: A sedan taxi from Vellore to Chennai starts at ₹2,300 for one-way. SUV (Innova) starts at ₹3,500. Round-trip passengers get a 10% discount on the per-km rate.',
      'Best Time to Travel: Early morning departures (5-6 AM) ensure you avoid traffic near Chennai. Weekend mornings are especially smooth. Avoid Friday evenings and Monday mornings when highway traffic peaks.',
      'Tips: Book your taxi at least 4-6 hours in advance for guaranteed availability. For airport drops, account for an extra 30 minutes of buffer time. Our drivers know all the petrol stops and rest areas along the route.',
    ],
    faqs: [
      { q: 'How long does it take from Vellore to Chennai by taxi?', a: 'The journey takes approximately 2.5 to 3.5 hours via NH44, depending on traffic conditions.' },
      { q: 'What is the cheapest taxi from Vellore to Chennai?', a: 'A sedan taxi starts at ₹2,300 for one-way travel. Book with VELLORE.TAXI for the best rates.' },
    ],
  },
  'airport-taxi-tips-vellore': {
    title: 'Airport Taxi Tips from Vellore — Save Time & Money',
    seoTitle: 'Airport Taxi Tips Vellore | Chennai & Bangalore',
    description: 'Expert tips for booking airport taxi from Vellore to Chennai and Bangalore airports. Save time and money with VELLORE.TAXI.',
    content: [
      'Catching a flight from Vellore means travelling to either Chennai International Airport (MAA) or Kempegowda International Airport in Bangalore (BLR). Planning your airport taxi properly can save you significant time, money, and stress.',
      'Chennai Airport is approximately 140 km from Vellore and takes about 3 hours. Bangalore Airport is about 230 km away, requiring roughly 4.5 hours of travel. Always add a buffer of 1 hour for unexpected delays.',
      'Tip 1: Book in Advance. Airport trips should be booked at least 6-8 hours in advance, especially for early morning flights. VELLORE.TAXI offers advance booking with guaranteed pickup.',
      'Tip 2: Choose Fixed-Fare Taxis. Avoid metered taxis for airport runs. VELLORE.TAXI offers fixed fares — ₹2,300 for Chennai Airport and ₹4,500 for Bangalore Airport in a sedan.',
      'Tip 3: Check for Flight Tracking. A good taxi service tracks your flight status. If your return flight is delayed, VELLORE.TAXI adjusts the pickup time automatically with 45 minutes of free waiting.',
      'Tip 4: Consider Return Booking. If you know your return date, book both ways together and save 10% on the total fare. This also guarantees availability at the airport.',
    ],
    faqs: [
      { q: 'How early should I book an airport taxi from Vellore?', a: 'We recommend booking at least 6-8 hours in advance for airport transfers to ensure guaranteed availability.' },
      { q: 'Is there waiting charge at the airport?', a: 'VELLORE.TAXI offers 45 minutes of free waiting at the airport. Additional waiting is ₹100/hour.' },
    ],
  },
  'affordable-cab-booking-vellore': {
    title: 'Affordable Cab Booking in Vellore — Complete Price Guide',
    seoTitle: 'Affordable Cab Booking Vellore | Price Guide',
    description: 'Find the most affordable cab booking options in Vellore. Complete price guide for local, outstation, and airport taxi services.',
    content: [
      'Finding an affordable yet reliable cab in Vellore doesn\'t have to be a challenge. At VELLORE.TAXI, we have made it our mission to provide the most competitive taxi rates in the city without compromising on quality or safety.',
      'Local Taxi Rates: City rides start from just ₹350 base fare + ₹13/km in a sedan. This makes even short trips within Vellore city incredibly affordable.',
      'Hourly Rentals: Need a cab for multiple stops? Our hourly rental starts at ₹200/hour (minimum 4 hours) — perfect for hospital visits, shopping trips, or real estate viewings.',
      'Outstation Trips: One-way to Chennai from ₹2,300, Bangalore from ₹4,500, Tirupati from ₹3,500. Round trips get an automatic 10% discount.',
      'Money-Saving Tips: Book round trips instead of two one-way trips. Use WhatsApp booking for fastest confirmation. Share rides with fellow travellers when possible. Ask about our monthly package for regular commuters.',
      'VELLORE.TAXI promises no hidden charges — what we quote is what you pay. Toll and parking are the only extras, and they are always communicated upfront.',
    ],
    faqs: [
      { q: 'What is the cheapest taxi in Vellore?', a: 'VELLORE.TAXI sedan rides start from ₹350 base + ₹13/km, making us the most affordable option in the city.' },
      { q: 'Are there any hidden charges?', a: 'Absolutely not. Toll and parking are the only extras, and they are always communicated before your trip.' },
    ],
  },
  'top-tourist-places-vellore': {
    title: 'Top Tourist Places in Vellore — Visit by Taxi',
    seoTitle: 'Top Tourist Places in Vellore | Travel by Taxi',
    description: 'Explore the best tourist attractions in Vellore by taxi. Visit Vellore Fort, Jalakandeswarar Temple, Yelagiri Hills & more.',
    content: [
      'Vellore is a city rich in history, culture, and natural beauty. Whether you are a tourist visiting for the first time or a local looking for weekend getaways, exploring these places by taxi is the most comfortable way to see everything Vellore has to offer.',
      'Vellore Fort: Built in the 16th century by Vijayanagar kings, this stunning granite fort is the city\'s most iconic landmark. Inside, you\'ll find the beautiful Jalakandeswarar Temple with its intricate Vijayanagar architecture. Entry is free, and it\'s open from 8 AM to 6 PM.',
      'Jalakandeswarar Temple: Located inside Vellore Fort, this temple is a masterpiece of Dravidian architecture. The ornate pillars and sculptures date back to the 16th century.',
      'Yelagiri Hills: Just 85 km from Vellore, Yelagiri is a beautiful hill station perfect for a day trip. Book a round-trip taxi from Vellore for a scenic escape featuring boating, trekking, and stunning viewpoints.',
      'Amirthi Zoological Park: Located 25 km from Vellore, this forest area is home to deer, peacocks, and a beautiful waterfall. A great spot for family outings.',
      'Science Park & Srilakshmi Golden Temple: The golden temple at Sripuram, 8 km from Vellore, is covered in 1,500 kg of gold and is a must-visit spiritual destination. VELLORE.TAXI drivers know the best parking spots and entry points.',
      'Book a full-day Vellore sightseeing taxi package starting from just ₹1,500. Our drivers double as knowledgeable local guides who can share the rich history of each location.',
    ],
    faqs: [
      { q: 'How much does a Vellore sightseeing taxi cost?', a: 'A full-day sightseeing package covering major attractions costs ₹1,500 in a sedan, including driver allowance.' },
      { q: 'Can I visit Yelagiri by taxi from Vellore?', a: 'Yes! A round-trip taxi to Yelagiri Hills costs approximately ₹2,500 in a sedan. The scenic drive takes about 2 hours each way.' },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogData[slug] : null;

  if (!post) {
    return (
      <Layout>
        <SEO title="Post Not Found | VELLORE.TAXI Blog" description="The blog post you're looking for was not found." />
        <div className="section-padding text-center container-narrow">
          <h1 className="font-display font-bold text-3xl mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary font-semibold">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={post.seoTitle} description={post.description} />
      <HeroSlider />
      <article className="section-padding">
        <div className="container-narrow max-w-3xl">
          <Link to="/blog" className="text-primary text-sm font-semibold mb-6 inline-block">← Back to Blog</Link>
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-8">{post.title}</h1>
          <div className="prose prose-lg max-w-none">
            {post.content.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </div>
          <div className="mt-8 p-6 bg-accent rounded-xl">
            <p className="font-semibold mb-2">Need a taxi in Vellore?</p>
            <p className="text-muted-foreground text-sm mb-4">Book with VELLORE.TAXI for the best rates and 24/7 service.</p>
            <div className="flex gap-3">
              <a href="tel:+919442030725" className="cta-call text-xs">Call Now</a>
              <Link to="/contact" className="cta-primary text-xs">Book Online</Link>
            </div>
          </div>
        </div>
      </article>
      <FAQ items={post.faqs} />
      <CTABanner />
    </Layout>
  );
};

export default BlogPost;
