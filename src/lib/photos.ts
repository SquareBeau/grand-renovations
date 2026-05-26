export type Photo = {
  src: string;
  alt: string;
  category:
    | "decks-patios"
    | "fences"
    | "kitchens"
    | "bathrooms"
    | "carpentry"
    | "renovations";
  orientation: "landscape" | "portrait";
};

export const PHOTOS: Photo[] = [
  {
    src: "/gallery/patio-covered-gable.jpg",
    alt: "Covered patio with stained gable roof, exposed beams, and hot tub",
    category: "decks-patios",
    orientation: "landscape",
  },
  {
    src: "/gallery/deck-black-railing.jpg",
    alt: "Second-story deck with black metal railings and freshly milled framing",
    category: "decks-patios",
    orientation: "portrait",
  },
  {
    src: "/gallery/deck-second-story-balcony.jpg",
    alt: "Second-story balcony with black metal railing built off a brick home",
    category: "decks-patios",
    orientation: "landscape",
  },
  {
    src: "/gallery/patio-polycarbonate-cover.jpg",
    alt: "Polycarbonate corrugated patio roof installation viewed from the roofline",
    category: "decks-patios",
    orientation: "landscape",
  },
  {
    src: "/gallery/fence-horizontal-modern.jpg",
    alt: "Modern horizontal stained-wood privacy fence screening pool equipment",
    category: "fences",
    orientation: "landscape",
  },
  {
    src: "/gallery/fence-stained-gate.jpg",
    alt: "Tall custom stained wood privacy gate with iron hinges",
    category: "fences",
    orientation: "landscape",
  },
  {
    src: "/gallery/kitchen-white-marble.jpg",
    alt: "Renovated kitchen with white shaker cabinets and marble countertops",
    category: "kitchens",
    orientation: "landscape",
  },
  {
    src: "/gallery/bathroom-marble-vanity.jpg",
    alt: "Bathroom with long marble vanity, framed mirror, and modern light bar",
    category: "bathrooms",
    orientation: "landscape",
  },
  {
    src: "/gallery/hardwood-living-room.jpg",
    alt: "Open living room with dark hardwood floors, crown molding, and tray ceiling",
    category: "carpentry",
    orientation: "landscape",
  },
  {
    src: "/gallery/hardwood-stairs.jpg",
    alt: "Hand-stained hardwood staircase with custom treads and risers",
    category: "carpentry",
    orientation: "portrait",
  },
  {
    src: "/gallery/hardwood-diamond-inlay.jpg",
    alt: "Custom hardwood floor with diamond inlay pattern in entryway",
    category: "carpentry",
    orientation: "landscape",
  },
  {
    src: "/gallery/demo-in-progress.jpg",
    alt: "Mid-renovation interior demo with framing, sliding door installed, crew working",
    category: "renovations",
    orientation: "landscape",
  },
];

export const CATEGORY_LABELS: Record<Photo["category"], string> = {
  "decks-patios": "Decks & Covered Patios",
  fences: "Fences & Gates",
  kitchens: "Kitchens",
  bathrooms: "Bathrooms",
  carpentry: "Carpentry & Flooring",
  renovations: "Renovations in Progress",
};

export const FEATURED_PHOTOS = [
  PHOTOS[0],
  PHOTOS[6],
  PHOTOS[10],
  PHOTOS[4],
  PHOTOS[7],
  PHOTOS[1],
];
