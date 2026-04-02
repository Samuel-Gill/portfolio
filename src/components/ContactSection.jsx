export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Let’s build your next growth system</h2>
          <p className="mt-4 text-slate-600">
            Share your goals and I’ll propose a solution tailored to your operations, timeline, and growth
            targets.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p>Email: hello@yourdomain.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
          />
          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
          />
          <textarea
            rows="5"
            placeholder="Tell me about your project"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
          />
          <button
            type="button"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
