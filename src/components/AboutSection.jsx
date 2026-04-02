import SectionReveal from './SectionReveal';

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">About our team</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              We are a team of builders, strategists, and growth operators
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600">
            We collaborate with ambitious businesses to design and implement practical digital systems.
            Our work blends technical expertise with commercial thinking, so every solution is grounded in
            measurable outcomes, faster execution, and long-term operational stability.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
