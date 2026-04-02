import SectionReveal from './SectionReveal';
import Testimonial from './Testimonial';

const testimonials = [
  {
    quote:
      'Their automation solution saved us countless hours every week, and our support response times improved immediately.',
    name: 'Monica Rivera',
    role: 'Operations Lead, BrightCart',
  },
  {
    quote:
      'Our online store performance improved significantly after working with their team. We now have a clear process for listings, ads, and reporting.',
    name: 'Liam Foster',
    role: 'Director, Apex Commerce Co.',
  },
  {
    quote:
      'They translated our ideas into a polished platform our sales and marketing teams rely on daily. Execution was structured and reliable.',
    name: 'Priya Nair',
    role: 'COO, Northline Distribution',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Trusted by growing teams</h2>
        </SectionReveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
