export function MarketplaceIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3 9.5h18v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-10Z" />
      <path d="m5 9.5 1.5-5h11L19 9.5" />
      <path d="M9 13h6" />
    </svg>
  );
}

export function DevelopmentIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m13 6-2 12" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>
  );
}

export function MarketingIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 14V9" />
      <path d="M9 14V6" />
      <path d="M14 14v-3" />
      <path d="M19 14V4" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function DesignIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="m14.5 4.5 5 5" />
      <path d="m3 21 6-1 11-11-5-5L4 15l-1 6Z" />
      <path d="m12 7 5 5" />
    </svg>
  );
}

export function AutomationIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}
