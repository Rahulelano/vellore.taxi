import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroSlider from '@/components/HeroSlider';

const localRates = [
  { type: 'Sedan (Dzire/Etios)', base: '₹350', perKm: '₹13/km', note: 'Best for solo & small families' },
  { type: 'SUV (Innova Cab)', base: '₹999', perKm: '₹18/km', note: 'Comfortable family travel' },
  { type: 'Premium (Crysta)', base: '₹1500', perKm: '₹20/km', note: 'Luxury travel experience' },
];

const outstationRates = [
  { route: 'Vellore → Chennai (One Way)', sedan: '₹2,300', suv: '₹3,500' },
  { route: 'Vellore → Bangalore (One Way)', sedan: '₹4,500', suv: '₹7,500' },
  { route: 'Vellore → Tirupati (One Way)', sedan: '₹3,500', suv: '₹5,000' },
  { route: 'Vellore → Pondicherry (One Way)', sedan: '₹3,500', suv: '₹5,000' },
  { route: 'Vellore → Tiruvannamalai (One Way)', sedan: '₹2,300', suv: '₹3,500' },
  { route: 'Vellore → Trichy (One Way)', sedan: '₹4,500', suv: '₹6,000' },
  { route: 'Vellore → Coimbatore (One Way)', sedan: '₹7,000', suv: '₹8,500' },
  { route: 'Vellore → Chennai Airport', sedan: '₹2,300', suv: '₹3,500' },
  { route: 'Vellore → Bangalore Airport', sedan: '₹4,500', suv: '₹7,500' },
  { route: 'Ranipet → Chennai (One Way)', sedan: '₹2,300', suv: '₹3,500' },
  { route: 'Arcot → Chennai (One Way)', sedan: '₹2,300', suv: '₹3,500' },
  { route: 'Walajapet → Chennai (One Way)', sedan: '₹2,300', suv: '₹3,500' },
];

const faqs = [
  { q: 'Are the prices inclusive of toll?', a: 'No, toll charges and state permit fees are extra and paid directly by the passenger.' },
  { q: 'Is there a waiting charge?', a: 'First 30 minutes of waiting is free. After that, ₹100/hour is charged.' },
  { q: 'Do you offer round-trip discounts?', a: 'Yes! Round trips get 10% off on the per-km rate. Contact us for custom quotes.' },
  { q: 'Can I negotiate the fare?', a: 'Our fares are already the most competitive in Vellore. However, for bulk or corporate bookings, we offer special rates.' },
];

const Tariff = () => (
  <Layout>
    <SEO title="Taxi Tariff & Rates in Vellore | VELLORE.TAXI Pricing" description="Check our transparent taxi rates in Vellore. Affordable pricing for local, outstation & airport rides. No hidden charges!" />

    <HeroSlider />

    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="font-display font-bold text-2xl mb-6">Local Taxi Rates (Vellore City)</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {localRates.map((r) => (
            <div key={r.type} className="border rounded-xl p-6 bg-card text-center hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-lg mb-2">{r.type}</h3>
              <p className="text-3xl font-bold text-primary mb-1">{r.perKm}</p>
              <p className="text-muted-foreground text-sm">Base fare: {r.base}</p>
              <p className="text-xs text-muted-foreground mt-2">{r.note}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display font-bold text-2xl mb-6">Outstation & Airport Taxi Rates</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                <th className="text-left p-4 font-semibold text-sm rounded-tl-lg">Route</th>
                <th className="text-center p-4 font-semibold text-sm">Sedan</th>
                <th className="text-center p-4 font-semibold text-sm rounded-tr-lg">SUV</th>
              </tr>
            </thead>
            <tbody>
              {outstationRates.map((r, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="p-4 text-sm font-medium">{r.route}</td>
                  <td className="p-4 text-center text-sm text-primary font-semibold">{r.sedan}</td>
                  <td className="p-4 text-center text-sm text-primary font-semibold">{r.suv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-4">* Toll, parking & state permit charges extra. Night charges (10 PM–6 AM): +10%.</p>
      </div>
    </section>

    <FAQ items={faqs} />
    <CTABanner />
  </Layout>
);

export default Tariff;
