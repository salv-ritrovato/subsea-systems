import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] transition-opacity duration-300 hover:opacity-80 ${className}`}
      aria-label="Subsea Systems — Home"
    >
      <svg
        viewBox="0 0 200 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-auto md:h-14"
        aria-hidden="true"
      >
        <circle cx="18" cy="28" r="13" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="18" cy="28" r="8" stroke="currentColor" strokeWidth="1" opacity="0.75" />
        <circle cx="18" cy="28" r="3.5" fill="currentColor" />

        <text
          x="40"
          y="22"
          fill="currentColor"
          className="logo-wordmark"
          fontSize="16"
          letterSpacing="0.26em"
        >
          SUBSEA
        </text>
        <text
          x="40"
          y="44"
          fill="currentColor"
          className="logo-wordmark"
          fontSize="16"
          letterSpacing="0.26em"
        >
          SYSTEMS
        </text>
      </svg>
    </Link>
  )
}
