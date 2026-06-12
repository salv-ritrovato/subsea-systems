import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/navigationData'
import { fleetUnits } from '../../data/fleetData'
import { siteConfig } from '../../data/siteConfig'
import Logo from '../ui/Logo'
import { StaggerItem, StaggerReveal } from '../ui/Reveal'

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#040810] px-8 py-12 md:px-12 md:py-14">
      <StaggerReveal
        className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between"
        amount={0.2}
      >
        <StaggerItem>
          <div>
            <Logo className="opacity-80" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              {siteConfig.tagline}
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <nav aria-label="Footer navigation">
            <p className="mb-4 font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/25">
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white/45 transition-opacity duration-300 hover:text-white/75"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </StaggerItem>

        <StaggerItem>
          <nav aria-label="Fleet products">
            <p className="mb-4 font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/25">
              Fleet
            </p>
            <ul className="flex flex-col gap-3">
              {fleetUnits.map(({ slug, name, tagline }) => (
                <li key={slug}>
                  <Link
                    to={`/fleet/${slug}`}
                    className="group flex flex-col font-sans transition-opacity duration-300 hover:opacity-80"
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                      {name}
                    </span>
                    <span className="mt-0.5 text-[10px] normal-case tracking-normal text-white/25">
                      {tagline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </StaggerItem>

        <StaggerItem>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white/45 transition-opacity duration-300 hover:text-white/75"
            >
              LinkedIn
            </a>
            <p className="font-sans text-xs text-white/30">{siteConfig.copyright}</p>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </footer>
  )
}
