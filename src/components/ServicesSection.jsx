import { services } from '../data/services';
import SectionReveal from './SectionReveal';
import ServiceCard from './ServiceCard';
import ServiceSection from './ServiceSection';

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Services</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            We deliver full-spectrum digital execution across growth, technology, design, and automation.
          </h2>
        </SectionReveal>

        <div className="mt-10 space-y-8">
          {services.map((service, index) => (
            <ServiceSection key={service.slug} service={service} reverse={index % 2 === 1} />
          ))}
        </div>

        <SectionReveal className="mt-12" delay={0.1}>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-brand-50/40 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">Quick access</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={`quick-${service.slug}`} service={service} />
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
