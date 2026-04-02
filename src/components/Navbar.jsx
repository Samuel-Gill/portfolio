import { Link, NavLink, useLocation } from 'react-router-dom';

const baseNavItem =
  'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
          Digital Solutions Expert
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <a href={pathname === '/' ? '#services' : '/#services'} className={baseNavItem}>
            Services
          </a>
          <a href={pathname === '/' ? '#testimonials' : '/#testimonials'} className={baseNavItem}>
            Testimonials
          </a>
          <a href={pathname === '/' ? '#about' : '/#about'} className={baseNavItem}>
            About
          </a>
          <a href={pathname === '/' ? '#contact' : '/#contact'} className={baseNavItem}>
            Contact
          </a>
          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              `${baseNavItem} ${isActive ? 'bg-brand-50 text-brand-700' : ''}`
            }
          >
            Detail Pages
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
