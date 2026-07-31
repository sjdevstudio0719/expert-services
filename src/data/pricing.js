const pricingPlans = [
  {
    name: 'Starter',
    tagline: 'For small homes & shops',
    cameras: '2 – 4 Cameras',
    installation: 'Standard cabling included',
    storage: '15 days local storage',
    warranty: '1 Year hardware warranty',
    support: 'Business-hours support',
    highlight: false,
  },
  {
    name: 'Standard',
    tagline: 'For homes & growing offices',
    cameras: '4 – 8 Cameras',
    installation: 'Standard cabling + 1 door access',
    storage: '30 days local storage',
    warranty: '2 Year hardware warranty',
    support: 'Priority phone support',
    highlight: false,
  },
  {
    name: 'Business',
    tagline: 'For offices & retail outlets',
    cameras: '8 – 16 Cameras',
    installation: 'Structured cabling + networking',
    storage: '45 days local + cloud backup',
    warranty: '3 Year hardware warranty',
    support: 'Dedicated support line',
    highlight: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For warehouses & industrial sites',
    cameras: '16+ Cameras, custom design',
    installation: 'Full site survey & structured cabling',
    storage: '60+ days local + redundant cloud',
    warranty: '5 Year hardware warranty',
    support: '24/7 dedicated account manager',
    highlight: false,
  },
];

export const comparisonRows = [
  { label: 'Site inspection', starter: true, standard: true, business: true, enterprise: true },
  { label: 'HD camera hardware', starter: true, standard: true, business: true, enterprise: true },
  { label: 'Mobile app access', starter: true, standard: true, business: true, enterprise: true },
  { label: 'Biometric access control', starter: false, standard: true, business: true, enterprise: true },
  { label: 'Cloud backup', starter: false, standard: false, business: true, enterprise: true },
  { label: 'Structured networking', starter: false, standard: false, business: true, enterprise: true },
  { label: 'Dedicated account manager', starter: false, standard: false, business: false, enterprise: true },
  { label: 'Annual maintenance contract', starter: false, standard: true, business: true, enterprise: true },
];

export default pricingPlans;
