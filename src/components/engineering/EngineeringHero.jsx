import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { engineeringHero } from '../../data/engineeringData'
import { fleetAnchor } from '../../data/navigationData'
import { defaultTransition } from '../../lib/motionVariants'
import './engineering.css'

export default function EngineeringHero() {
  return (
    <section className="engineering-hero">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={engineeringHero.image}
          alt={engineeringHero.imageAlt}
          className="h-full w-full object-cover object-[center_20%]"
          fetchpriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#030609]/60 via-[#030609]/40 to-[#030609]"
          aria-hidden="true"
        />
      </div>
      <div className="engineering-hero__grid" aria-hidden="true" />
      <div className="engineering-fade-bottom engineering-fade-bottom--to-build" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, duration: 1, delay: 0.2 }}
        >
          <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/70">
            Engineering
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            {engineeringHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            {engineeringHero.subtitle}
          </p>
          <Link
            to={fleetAnchor.to}
            className="mt-10 inline-block border border-white/20 px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-sky-400/40 hover:text-white"
          >
            {fleetAnchor.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
