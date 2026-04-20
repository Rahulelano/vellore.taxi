import { Star } from 'lucide-react';

const reviews = [
  { name: 'Rajesh K.', text: 'Best taxi service in Vellore! Always on time and very affordable. Highly recommend for airport trips.', rating: 5 },
  { name: 'Priya S.', text: 'Booked a cab from Vellore to Chennai. Driver was professional, car was clean. Will use again!', rating: 5 },
  { name: 'Arun M.', text: 'Reliable 24/7 service. Used them for a late night ride from CMC Hospital. Very safe and comfortable.', rating: 5 },
  { name: 'Deepa R.', text: 'Affordable outstation taxi. Went to Tirupati with family. Excellent experience overall.', rating: 5 },
];

const Testimonials = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-narrow">
      <h2 className="font-display font-bold text-3xl text-center mb-4">What Our Customers Say</h2>
      <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trusted by thousands of happy travellers in Vellore</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
            <p className="font-semibold text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
