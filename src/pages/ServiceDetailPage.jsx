import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { services } from '../data/services';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">Service not found</h1>
        <p className="mt-3 text-slate-600">The service you requested is not available.</p>
        <Button as="link" to="/" className="mt-6">
          Back to Homepage
        </Button>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-500 p-8 text-white shadow-soft sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex rounded-xl bg-white/15 p-3">
              <Icon className="h-8 w-8" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-100">Service Focus</p>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-indigo-100">{service.paragraph}</p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-slate-900">What we execute</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-700">
              {service.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.aside
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Partnership CTA</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Work With Us</h3>
            <p className="mt-3 text-sm text-slate-600">
              We scope each engagement around your goals, stack, and operational realities.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button as="link" to="/#contact">
                Start a Project
              </Button>
              <Button as="link" to="/" variant="secondary">
                Back to Home
              </Button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
