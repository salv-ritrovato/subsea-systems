import { motion } from 'framer-motion'
import { defaultTransition } from '../../lib/motionVariants'
import { siteConfig } from '../../data/siteConfig'

const HERO_VIDEO = '/videos/10480-224857514.mp4'

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-end overflow-hidden bg-[#060c12]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(6,12,18,0.45)] via-transparent to-transparent"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,12,18,0.35)_30%,rgba(6,12,18,0.85)_70%,#060c12_100%)]"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 px-8 pb-10 text-center text-white"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...defaultTransition, duration: 1.1, delay: 0.45 }}
      >
        <motion.h1
          className="font-serif text-4xl font-light italic tracking-wide md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, duration: 1, delay: 0.65 }}
        >
          {siteConfig.tagline}
        </motion.h1>
      </motion.div>

      <motion.div
        className="relative z-10 mb-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="h-9 w-px bg-gradient-to-b from-white/40 to-transparent"
          animate={{ opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="font-sans text-[8px] font-medium uppercase tracking-[0.3em] text-white/25">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
