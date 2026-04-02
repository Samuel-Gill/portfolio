export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} WeScale Digital. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="transition hover:text-slate-900" href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="transition hover:text-slate-900" href="https://dribbble.com" target="_blank" rel="noreferrer">
            Dribbble
          </a>
          <a className="transition hover:text-slate-900" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
