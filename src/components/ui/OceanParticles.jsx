import { useReducedMotion } from 'framer-motion'
import { Particles, ParticlesProvider, useParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const configs = {
  deep: {
    fullScreen: { enable: false },
    particles: {
      number: { value: 60, density: { enable: true } },
      color: { value: ['#ffffff', '#e0f2fe', '#f0f9ff', '#bae6fd'] },
      opacity: {
        value: { min: 0.08, max: 0.38 },
        animation: { enable: true, speed: 0.3, sync: false },
      },
      size: {
        value: { min: 0.8, max: 2.8 },
        animation: { enable: true, speed: 0.6, sync: false },
      },
      move: {
        enable: true,
        speed: { min: 0.15, max: 0.45 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
    },
    detectRetina: true,
  },

  bioluminescent: {
    fullScreen: { enable: false },
    particles: {
      number: { value: 90, density: { enable: true } },
      color: { value: ['#22d3ee', '#38bdf8', '#7dd3fc', '#bae6fd', '#a78bfa'] },
      opacity: {
        value: { min: 0.06, max: 0.45 },
        animation: { enable: true, speed: 0.5, sync: false },
      },
      size: {
        value: { min: 0.6, max: 3.2 },
        animation: { enable: true, speed: 0.8, sync: false },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 0.5 },
        direction: 'top',
        random: true,
        straight: false,
        outModes: { default: 'out' },
        drift: 0.4,
      },
    },
    detectRetina: true,
  },
}

async function initEngine(engine) {
  await loadSlim(engine)
}

function ParticlesInner({ variant, className }) {
  const prefersReducedMotion = useReducedMotion()
  const init = useParticlesProvider()

  if (prefersReducedMotion || !init) return null

  return (
    <Particles
      id={`ocean-particles-${variant}`}
      className={`pointer-events-none absolute inset-0 z-[2] ${className}`}
      options={configs[variant]}
    />
  )
}

export default function OceanParticles({ variant = 'deep', className = '' }) {
  return (
    <ParticlesProvider init={initEngine}>
      <ParticlesInner variant={variant} className={className} />
    </ParticlesProvider>
  )
}
