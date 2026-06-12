import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fleetUnits } from '../data/fleetData'
import { siteConfig } from '../data/siteConfig'
import { fleetAnchor } from '../data/navigationData'
import { defaultTransition } from '../lib/motionVariants'
import PageMeta from '../components/ui/PageMeta'
import Reveal, { StaggerItem, StaggerReveal } from '../components/ui/Reveal'

const accentColors = {
  cyan: {
    label: 'text-cyan-400/70',
    bar: 'bg-cyan-400/70',
    border: 'border-cyan-400/25',
    text: 'text-cyan-300',
    dot: 'bg-cyan-400/80',
  },
  amber: {
    label: 'text-amber-400/70',
    bar: 'bg-amber-400/70',
    border: 'border-amber-400/25',
    text: 'text-amber-300',
    dot: 'bg-amber-400/80',
  },
  green: {
    label: 'text-green-400/70',
    bar: 'bg-green-400/70',
    border: 'border-green-400/25',
    text: 'text-green-300',
    dot: 'bg-green-400/80',
  },
}

export default function FleetUnitPage() {
  const { slug } = useParams()
  const unit = fleetUnits.find((u) => u.slug === slug)

  if (!unit) return <Navigate to="/404" replace />

  const { title, description } = siteConfig.pages.fleetUnit(unit.name, unit.tagline)
  const c = accentColors[unit.accent] ?? accentColors.cyan

  const currentIndex = fleetUnits.findIndex((u) => u.slug === slug)
  const prev = fleetUnits[currentIndex - 1] ?? null
  const next = fleetUnits[currentIndex + 1] ?? null

  return (
    <main className="overflow-x-clip bg-[#060c12]">
      <PageMeta title={title} description={description} />

      {/* Hero */}
      <section className="relative min-h-[65svh] flex items-end bg-[#030609]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={unit.image}
            alt={unit.imageAlt}
            className="h-full w-full object-cover opacity-60"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030609]/40 via-transparent to-[#030609]" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#030609] via-[#030609]/80 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030609]/70 via-transparent to-transparent" aria-hidden="true" />
        </div>

        {/* Accent bar */}
        <div className={`absolute left-0 top-0 h-full w-[3px] ${c.bar} opacity-60`} aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, duration: 1, delay: 0.15 }}
          >
            <p className={`mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] ${c.label}`}>
              Fleet — {unit.tagline}
            </p>
            <h1 className="font-serif text-5xl font-light text-white md:text-6xl lg:text-7xl">
              {unit.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {unit.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights + Full specs */}
      <section className="mx-auto max-w-6xl px-8 py-20 md:px-12 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Highlights */}
          <Reveal>
            <p className={`mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.2em] ${c.label}`}>
              Key capabilities
            </p>
            <ul className="space-y-5">
              {unit.highlights.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-white/75">{item}</span>
                </li>
              ))}
            </ul>

            <p className={`mb-4 mt-14 font-sans text-[11px] font-medium uppercase tracking-[0.2em] ${c.label}`}>
              Use cases
            </p>
            <ul className="space-y-2.5">
              {unit.useCases.map((item) => (
                <li
                  key={item}
                  className={`font-sans text-xs uppercase tracking-[0.14em] text-white/50 flex items-center gap-3 before:h-px before:w-4 before:shrink-0 before:${c.bar} before:content-['']`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Full specs */}
          <Reveal delay={0.1} variant="fadeIn">
            <p className={`mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.2em] ${c.label}`}>
              Full specifications
            </p>
            <div className={`border ${c.border} divide-y divide-white/6`}>
              {unit.fullSpecs.map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between gap-4 px-5 py-3.5">
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/40">
                    {label}
                  </span>
                  <span className={`font-serif text-lg font-light ${c.text} tabular-nums`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Navigation between units */}
      <section className="border-t border-white/6 bg-[#040810]">
        <div className="mx-auto max-w-6xl px-8 py-10 md:px-12">
          <StaggerReveal className="flex items-center justify-between gap-6">
            <StaggerItem>
              {prev ? (
                <Link
                  to={`/fleet/${prev.slug}`}
                  className="group flex items-center gap-3 text-white/40 transition-colors duration-300 hover:text-white/80"
                >
                  <span className="font-sans text-lg">←</span>
                  <span className="flex flex-col">
                    <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/30">Previous</span>
                    <span className="font-serif text-base font-light">{prev.name}</span>
                  </span>
                </Link>
              ) : <span />}
            </StaggerItem>

            <StaggerItem>
              <Link
                to={fleetAnchor.to}
                className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 hover:text-white/65"
              >
                {fleetAnchor.cta}
              </Link>
            </StaggerItem>

            <StaggerItem>
              {next ? (
                <Link
                  to={`/fleet/${next.slug}`}
                  className="group flex items-center gap-3 text-right text-white/40 transition-colors duration-300 hover:text-white/80"
                >
                  <span className="flex flex-col">
                    <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/30">Next</span>
                    <span className="font-serif text-base font-light">{next.name}</span>
                  </span>
                  <span className="font-sans text-lg">→</span>
                </Link>
              ) : <span />}
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>
    </main>
  )
}
