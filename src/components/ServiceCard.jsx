import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/${service.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="mb-6 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
      <p className="mt-4 text-sm font-semibold text-brand-700">View details →</p>
    </Link>
  );
}
