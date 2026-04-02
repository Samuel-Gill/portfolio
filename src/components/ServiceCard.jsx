import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
      <Link
        to={`/services/${service.slug}`}
        className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-brand-200 hover:shadow-soft"
      >
        <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{service.shortDescription}</p>
      </Link>
    </motion.div>
  );
}
