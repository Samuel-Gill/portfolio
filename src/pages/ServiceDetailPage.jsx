import { Link, useParams } from 'react-router-dom';
import { services } from '../data/services';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">Service not found</h1>
        <p className="mt-3 text-slate-600">The service you requested is not available.</p>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          Back to Homepage
        </Link>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Service Detail</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{service.title}</h1>

        <p className="mt-6 text-base leading-7 text-slate-600">{service.paragraph}</p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">What’s included</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            {service.bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/#contact"
            className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Contact Me
          </Link>
          <Link
            to="/"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
