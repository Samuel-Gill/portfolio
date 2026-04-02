import { motion } from 'framer-motion';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8">
      <motion.div
        className="absolute -left-24 -top-16 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"
        animate={{ x: [0, -28, 0], y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-brand-50/30" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p
            className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1 text-sm font-medium text-brand-700"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Growth-focused digital agency
          </motion.p>
          <motion.h1
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We Build Scalable Digital Solutions for Modern Businesses
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
          >
            We combine e-commerce operations, product development, automation, marketing, and creative
            execution to help teams scale faster with reliable systems.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button as="link" to="/#services">
              Explore Services
            </Button>
            <Button as="link" to="/#contact" variant="secondary">
              Get Started
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">What we deliver</p>
          <div className="mt-5 space-y-4">
            {[
              'Marketplace growth operations and optimization',
              'High-performance websites, apps, and internal systems',
              'AI-powered workflows and performance marketing execution',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
