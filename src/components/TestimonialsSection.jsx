const testimonials = [
  {
    quote:
      'Working with him improved our online sales by 40% in just 3 months. The structure he brought to our listings and ads made a measurable difference.',
    name: 'Sarah Lin',
    role: 'Ecommerce Operations Manager',
  },
  {
    quote:
      'Our team finally has one platform for reporting, inventory tracking, and campaign monitoring. Delivery was fast, and the system is easy to manage.',
    name: 'Daniel Brooks',
    role: 'Founder, Retail Growth Studio',
  },
  {
    quote:
      'The automation workflows reduced repetitive manual tasks by hours each week and improved customer response time significantly.',
    name: 'Nina Patel',
    role: 'Head of Digital, Nova Supplies',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Client feedback
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-6 text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs text-slate-500">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
