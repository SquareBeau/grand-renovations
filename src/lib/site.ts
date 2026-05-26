export const SITE = {
  name: "Grand Renovations",
  owner: "Jeremy",
  ownerFullName: "Jeremy GrandPre",
  tagline: "Your DFW handyman & general contractor",
  shortDescription:
    "From a leaky faucet or attic ladder to a full kitchen remodel — Jeremy and the Grand Renovations crew handle it. The whole job, one phone call.",
  metro: "Dallas–Fort Worth, Texas",
  serviceArea: [
    "Dallas",
    "Fort Worth",
    "Plano",
    "Frisco",
    "McKinney",
    "Grapevine",
  ],
  phone: "(214) 315-0916",
  phoneHref: "tel:+12143150916",
  email: "jeremy@grandrenovations.com",
  emailHref: "mailto:jeremy@grandrenovations.com",
  hours: "Mon – Sat · 8:00 AM – 6:00 PM",
  googleRating: 5.0,
  googleReviewCount: 7,
  primaryCtaLabel: "Get a Free Quote",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
