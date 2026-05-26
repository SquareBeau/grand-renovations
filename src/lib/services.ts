export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  lane: "handyman" | "remodel";
};

// Handyman lane first — that's the bulk of the work.
export const SERVICES: Service[] = [
  {
    slug: "handyman",
    title: "Handyman & Repairs",
    shortDescription:
      "The everyday stuff. Attic ladders, drywall patches, dryer repairs, exterior lighting, plumbing fixtures, gate hinges — the punch-list most contractors won't pick up the phone for.",
    bullets: [
      "Drywall, paint touch-ups & patches",
      "Light fixtures, fans & outlets",
      "Faucets, garbage disposals, toilets",
      "Door, gate, and trim repair",
      "Attic ladders & shelving",
      "Honest small-job pricing",
    ],
    lane: "handyman",
  },
  {
    slug: "carpentry-painting",
    title: "Carpentry, Painting & Tile",
    shortDescription:
      "Trim, framing, finish carpentry, tile work, and full-room paint. Real craftsmanship on the parts of the job that show.",
    bullets: [
      "Trim, baseboards, crown molding",
      "Custom carpentry & framing",
      "Interior & exterior painting",
      "Tile install, repair, and replacement",
    ],
    lane: "handyman",
  },
  {
    slug: "fences",
    title: "Fences, Gates & Pergolas",
    shortDescription:
      "Privacy fences, custom gates, pergolas, and patio covers. Stained cedar, treated pine, and modern horizontal designs that hold up to Texas weather.",
    bullets: [
      "Privacy and pool fencing",
      "Custom wood gates & hardware",
      "Pergolas & covered patios",
      "Storm-damage fence repair",
    ],
    lane: "handyman",
  },
  {
    slug: "decks-patios",
    title: "Decks & Covered Patios",
    shortDescription:
      "Outdoor living that gets used. Decks, second-story balconies, covered patios, and outdoor kitchens built to spec.",
    bullets: [
      "New deck construction",
      "Covered patios with gable roofs",
      "Composite and wood decking",
      "Custom railings and built-ins",
    ],
    lane: "remodel",
  },
  {
    slug: "kitchens",
    title: "Kitchen Remodels",
    shortDescription:
      "Cabinets, counters, appliances, and layout changes — full kitchens that work the way you actually cook.",
    bullets: [
      "Custom cabinetry & countertops",
      "Tile, backsplash, and flooring",
      "Lighting, electrical, and plumbing",
      "Open-concept layout changes",
    ],
    lane: "remodel",
  },
  {
    slug: "bathrooms",
    title: "Bathroom Remodels",
    shortDescription:
      "Master suites, guest baths, powder rooms. Clean lines, durable finishes, and tile work done right the first time.",
    bullets: [
      "Walk-in showers & soaking tubs",
      "Custom vanities & lighting",
      "Tile, stone, and waterproofing",
      "Full layout reconfigurations",
    ],
    lane: "remodel",
  },
  {
    slug: "flooring",
    title: "Hardwood & Flooring",
    shortDescription:
      "Hardwood installation, refinishing, and custom inlay patterns. Plus tile, LVP, and full staircase work.",
    bullets: [
      "Hardwood install & refinish",
      "Custom inlay patterns",
      "Stair treads and railings",
      "Tile and LVP installation",
    ],
    lane: "remodel",
  },
  {
    slug: "interior-renovations",
    title: "Whole-Home Renovations",
    shortDescription:
      "Down-to-studs interior renovations and additions, coordinated by one general contractor.",
    bullets: [
      "Down-to-studs renovations",
      "Wall removal & layout changes",
      "Drywall, paint, trim, and finish",
      "Single point of accountability",
    ],
    lane: "remodel",
  },
];

export const HANDYMAN_SERVICES = SERVICES.filter((s) => s.lane === "handyman");
export const REMODEL_SERVICES = SERVICES.filter((s) => s.lane === "remodel");
