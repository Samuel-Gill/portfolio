import { motion } from 'framer-motion';

export default function Testimonial({ testimonial, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <p className="text-sm leading-6 text-slate-700">“{testimonial.quote}”</p>
      <p className="mt-6 text-sm font-semibold text-slate-900">{testimonial.name}</p>
      <p className="text-xs text-slate-500">{testimonial.role}</p>
    </motion.article>
  );
}
