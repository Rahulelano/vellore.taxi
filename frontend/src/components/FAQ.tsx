import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem { q: string; a: string; }

const FAQ = ({ items, title = 'Frequently Asked Questions' }: { items: FAQItem[]; title?: string }) => (
  <section className="section-padding">
    <div className="container-narrow">
      <h2 className="font-display font-bold text-3xl text-center mb-10">{title}</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-5">
            <AccordionTrigger className="text-left font-semibold text-sm">{item.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
