/**
 * Deep Ocean page — hero, depth zones, and observation stats.
 */
export const deepOceanHero = {
  title: 'Where light ends, life begins.',
  subtitle:
    'Below the photic zone, bioluminescence replaces sunlight. Our autonomous platforms are the only eyes capable of sustained observation at these depths.',
  label: 'Bioluminescent Zones',
}

export const depthZones = [
  {
    id: 'sunlight',
    range: '0 – 200 m',
    name: 'Sunlight Zone',
    description:
      'Photosynthesis drives the base of the food chain. Dense with megafauna — manta rays, whale sharks, and schooling fish. Our shallow platforms conduct continuous biodiversity surveys without surface intervention.',
  },
  {
    id: 'twilight',
    range: '200 – 1,000 m',
    name: 'Twilight Zone',
    description:
      'Light fades to near-zero. The mesopelagic is home to the largest daily migration on Earth — billions of organisms ascending to feed at night and retreating by day. A frontier almost entirely unmapped.',
  },
  {
    id: 'midnight',
    range: '1,000 – 4,000 m',
    name: 'Midnight Zone',
    description:
      'Permanent darkness. Pressure exceeds 400 atmospheres. Gelatinous organisms and chemosynthetic communities dominate — life forms that have never seen sunlight and were unknown to science a century ago.',
  },
  {
    id: 'abyssal',
    range: '4,000 – 6,000 m',
    name: 'Abyssal Zone',
    description:
      'The largest habitat on Earth, covering over half the ocean floor. Sediment plains, abyssal hills, and hydrothermal vent fields — ecosystems running entirely on geothermal energy. Our Explorer 3000 operates continuously at these depths.',
  },
  {
    id: 'hadal',
    range: '6,000 – 11,000 m',
    name: 'Hadal Zone',
    description:
      'The ocean trenches. Crushing pressures, near-freezing temperatures, and complete isolation. Depths beyond current platform ratings — the next frontier for autonomous deep-water exploration.',
  },
]

export const observationStats = [
  {
    id: 'max-depth',
    title: 'Max operating depth',
    value: '6,000 m — Aegis One rated depth',
  },
  {
    id: 'low-light',
    title: 'Low-light imaging',
    value: 'Scientific CMOS sensors rated to 0.0001 lux',
  },
  {
    id: 'biolum',
    title: 'Bioluminescence capture',
    value: 'Passive observation — zero active illumination required',
  },
  {
    id: 'endurance',
    title: 'Sustained endurance',
    value: 'Up to 30 days continuous deep-water station-keeping',
  },
]
