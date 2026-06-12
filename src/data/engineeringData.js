/**
 * Engineering page content — build process, video, and standards.
 */
export const engineeringHero = {
  image: '/pictures/this_is_engineering-engineer-4915794.jpg',
  imageAlt: 'Engineer precision-machining a subsea component under teal workshop lighting',
  title: 'Precision engineering for the abyss',
  subtitle:
    'Every drone and probe is designed, fabricated, and validated in-house — from titanium pressure hulls to acoustic sensor arrays.',
}

export const buildPhases = [
  {
    id: 'design',
    phase: '01',
    title: 'Design & simulation',
    description:
      'CAD modelling and CFD analysis define hull geometry, thruster placement, and buoyancy before a single component is machined.',
  },
  {
    id: 'fabrication',
    phase: '02',
    title: 'Frame fabrication',
    description:
      'Grade 5 titanium frames and syntactic foam buoyancy modules are CNC-machined, welded, and sealed to tolerances measured in microns.',
  },
  {
    id: 'pressure',
    phase: '03',
    title: 'Hyperbaric validation',
    description:
      'Every pressure vessel is cycled in our hyperbaric chamber — simulating full ocean depth before electronics are installed.',
  },
  {
    id: 'sensors',
    phase: '04',
    title: 'Sensor integration',
    description:
      'Multi-beam sonar, INS, DVL, and optical payloads are calibrated as a fused stack — each probe tested against reference standards.',
  },
  {
    id: 'trials',
    phase: '05',
    title: 'Sea trials',
    description:
      'Open-water acceptance trials verify navigation, manipulator precision, and acoustic telemetry before fleet deployment.',
  },
]

export const engineeringVideo = {
  src: '/videos/5497-184226939.mp4',
  poster: '/pictures/this_is_engineering-engineer-4915794.jpg',
  label: 'Fabrication',
  title: 'Assembly in motion',
  description:
    'From titanium frame welding to sensor stack integration — every drone and probe passes through our assembly bay before hyperbaric certification.',
  highlights: [
    'CNC-machined pressure hulls',
    'Clean-room sensor calibration',
    'Final integration & pre-delivery testing',
  ],
}

export const engineeringStandards = [
  {
    id: 'materials',
    title: 'Materials',
    value: 'Ti-6Al-4V · Alumina ceramic · PE1000',
  },
  {
    id: 'pressure',
    title: 'Pressure rating',
    value: 'Tested to 1.5× operating depth',
  },
  {
    id: 'quality',
    title: 'Quality system',
    value: 'ISO 9001 · DNV-GL aligned',
  },
  {
    id: 'lead',
    title: 'Fabrication lead',
    value: '12–16 weeks standard build',
  },
]
