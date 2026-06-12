/**
 * Global site configuration — contact details, branding, meta.
 */
export const siteConfig = {
  name: 'Subsea Systems',
  tagline: 'Engineering the deep.',
  url: 'https://subseasystems.com',
  pages: {
    home: {
      title: 'Subsea Systems — Autonomous Underwater Platforms',
      description:
        'Autonomous underwater vehicles and deep-sea platforms engineered for extreme depths. Inspection, mapping, and mission operations — built in-house.',
    },
    engineering: {
      title: 'Engineering — Subsea Systems',
      description:
        'How we design and build our autonomous underwater vehicles: from raw titanium to pressure-tested, mission-ready platforms.',
    },
    deepOcean: {
      title: 'Deep Ocean — Subsea Systems',
      description:
        'Explore the ocean depth zones, from the sunlight surface to the hadal trenches. Data and observations from active Subsea Systems deployments.',
    },
    notFound: {
      title: '404 — Page not found · Subsea Systems',
      description: 'The page you are looking for does not exist.',
    },
  },
  contact: {
    email: 'engineering@subseasystems.com',
    phone: '+1 (555) 012-4400',
    phoneHref: 'tel:+15550124400',
    hours: 'Mon–Fri · 08:00–18:00 UTC',
  },
  social: {
    linkedin: 'https://linkedin.com',
  },
  copyright: `© ${new Date().getFullYear()} Subsea Systems. All rights reserved.`,
}
