import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { deepOceanHero } from '../../data/deepOceanData'
import { defaultTransition } from '../../lib/motionVariants'
import './deep-ocean.css'

const JELLYFISH_VIDEO = '/videos/213616.mp4'

export default function DeepOceanHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="deep-ocean-hero">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src={JELLYFISH_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#030609]/50 via-[#030609]/25 to-[#030609]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#030609]/60 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="deep-ocean-hero__grid" aria-hidden="true" />
      <div className="deep-ocean-fade-bottom deep-ocean-fade-bottom--to-zones" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
        {prefersReducedMotion ? (
          <HeroContent hero={deepOceanHero} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, duration: 1, delay: 0.2 }}
          >
            <HeroContent hero={deepOceanHero} />
          </motion.div>
        )}
      </div>
    </section>
  )
}

function HeroContent({ hero }) {
  return (
    <>
      <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/70">
        {hero.label}
      </p>
      <h1 className="max-w-3xl font-serif text-4xl font-light italic text-white md:text-5xl lg:text-6xl">
        {hero.title}
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
        {hero.subtitle}
      </p>
      <Link
        to="/#exploration"
        className="mt-10 inline-block border border-white/20 px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-sky-400/40 hover:text-white"
      >
        View exploration missions
      </Link>
    </>
  )
}
