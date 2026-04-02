import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
            End-to-end digital execution
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Full Stack Developer & Digital Solutions Expert
          </h1>
          <p className="mt-6 text-base text-slate-600 sm:text-lg">
            I help businesses launch, scale, and automate digital operations with development, design,
            growth strategy, and AI implementation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              View Services
            </a>
            <Link
              to="/development"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
