import SectionReveal from './SectionReveal';
import Button from './Button';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Let’s build what your business needs next</h2>
            <p className="mt-4 text-slate-600">
              Share your current challenges, growth goals, and timelines. We will propose a scoped plan
              designed around your team and operations.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <p>Email: hello@agencydomain.com</p>
              <p>Phone: +1 (555) 987-6543</p>
            </div>
          </div>

          <form className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
            />
            <input
              type="email"
              placeholder="Business email"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
            />
            <textarea
              rows="5"
              placeholder="What would you like us to help you build?"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
            />
            <Button type="button" className="w-full">
              Send Message
            </Button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
