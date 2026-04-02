import { Link } from 'react-router-dom';

const baseStyles =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2';

const variants = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_20px_35px_-18px_rgba(79,70,229,0.65)]',
  secondary:
    'border border-slate-300 bg-white text-slate-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700',
};

export default function Button({ as = 'button', variant = 'primary', className = '', children, ...props }) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === 'link') {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
