import { motion } from 'framer-motion';
import Button from './Button';

export default function ServiceSection({ service, reverse = false }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className={`grid gap-8 lg:grid-cols-2 lg:items-start ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <div className="inline-flex rounded-2xl bg-brand-50 p-4 text-brand-600">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">{service.title}</h3>
          <p className="mt-3 text-slate-600">{service.shortDescription}</p>
          <div className="mt-6">
            <Button as="link" to={`/services/${service.slug}`} variant="secondary">
              View Service Page
            </Button>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Capabilities</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-600" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
