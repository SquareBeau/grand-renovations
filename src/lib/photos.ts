export type PhotoCategory =
  | "decks-patios"
  | "fences"
  | "kitchens"
  | "bathrooms"
  | "flooring"
  | "carpentry-finish"
  | "renovations";

export type Photo = {
  src: string;
  alt: string;
  category: PhotoCategory;
  orientation: "landscape" | "portrait";
};

export const CATEGORY_LABELS: Record<PhotoCategory, string> = {
  "decks-patios": "Decks, Patios & Pergolas",
  fences: "Fences & Gates",
  kitchens: "Kitchens",
  bathrooms: "Bathrooms",
  flooring: "Floors & Stairs",
  "carpentry-finish": "Carpentry, Paint & Finish Work",
  renovations: "Renovations in Progress",
};

export const PHOTOS: Photo[] = [
  // Decks, Patios & Pergolas
  { src: "/gallery/13.jpg", alt: "Covered patio with gabled wood ceiling, stained beams, and hot tub on a concrete slab", category: "decks-patios", orientation: "landscape" },
  { src: "/gallery/15.jpg", alt: "Cedar-stained covered patio with exposed rafters and tongue-and-groove ceiling", category: "decks-patios", orientation: "portrait" },
  { src: "/gallery/17.jpg", alt: "Freestanding stained wood pergola with metal hip roof on a concrete patio", category: "decks-patios", orientation: "landscape" },
  { src: "/gallery/25.jpg", alt: "Gabled covered patio with stained tongue-and-groove ceiling, illuminated at night", category: "decks-patios", orientation: "landscape" },
  { src: "/gallery/16.jpg", alt: "Underside view of a cedar pergola with polycarbonate roof panels and exposed wood trusses", category: "decks-patios", orientation: "landscape" },
  { src: "/gallery/14.jpg", alt: "Pergola with polycarbonate roof panels viewed from above next to a shingled roof", category: "decks-patios", orientation: "landscape" },
  { src: "/gallery/07.jpg", alt: "Newly framed second-story balcony deck with black metal railing on a brick home", category: "decks-patios", orientation: "landscape" },
  { src: "/gallery/12.jpg", alt: "Elevated wood deck with black aluminum railing and newly stained framing below", category: "decks-patios", orientation: "portrait" },
  { src: "/gallery/31.jpg", alt: "Newly installed composite deck floor with black aluminum railing on a second-story balcony", category: "decks-patios", orientation: "landscape" },

  // Fences & Gates
  { src: "/gallery/11.jpg", alt: "Stained horizontal-board privacy screen enclosing pool equipment beside a stone home", category: "fences", orientation: "landscape" },
  { src: "/gallery/01.jpg", alt: "Stained wood privacy fence with matching gate and black metal hinges between two homes", category: "fences", orientation: "landscape" },
  { src: "/gallery/23.jpg", alt: "Tall stained cedar board-on-board privacy fence running between two stucco homes", category: "fences", orientation: "landscape" },
  { src: "/gallery/30.jpg", alt: "Cedar board-on-board fence with steel posts and horizontal trim rails before staining", category: "fences", orientation: "landscape" },
  { src: "/gallery/53.jpg", alt: "Freshly stained cedar privacy fence surrounding a green backyard lawn", category: "fences", orientation: "landscape" },
  { src: "/gallery/34.jpg", alt: "Stained wood privacy fence enclosing a green lawn in a stucco-home neighborhood", category: "fences", orientation: "landscape" },
  { src: "/gallery/44.jpg", alt: "Stained cedar privacy fence along a green side yard between two stucco homes", category: "fences", orientation: "landscape" },
  { src: "/gallery/56.jpg", alt: "Cedar board-on-batten fence with steel posts and horizontal rails along a stucco home", category: "fences", orientation: "landscape" },
  { src: "/gallery/57.jpg", alt: "Stained cedar privacy enclosure with access gate built around a utility area", category: "fences", orientation: "landscape" },
  { src: "/gallery/60.jpg", alt: "New stained cedar privacy fence enclosing a freshly sodded backyard", category: "fences", orientation: "landscape" },
  { src: "/gallery/62.jpg", alt: "Tall cedar privacy fence with capped top rail between two stucco homes", category: "fences", orientation: "landscape" },
  { src: "/gallery/64.jpg", alt: "Cedar privacy fence transitioning from stained to unstained boards", category: "fences", orientation: "landscape" },
  { src: "/gallery/67.jpg", alt: "Stained cedar privacy fence around a sodded backyard beside a stucco home", category: "fences", orientation: "landscape" },

  // Kitchens
  { src: "/gallery/09.jpg", alt: "Remodeled kitchen with white shaker cabinets, marble-look countertops, and built-in wall oven", category: "kitchens", orientation: "landscape" },
  { src: "/gallery/24.jpg", alt: "White shaker kitchen cabinetry with built-in wall oven and tile flooring", category: "kitchens", orientation: "landscape" },
  { src: "/gallery/28.jpg", alt: "Kitchen cooktop and stainless range hood with white shaker cabinets and marble-look counters", category: "kitchens", orientation: "landscape" },
  { src: "/gallery/51.jpg", alt: "Refinished white shaker upper cabinets above a stove with new gray subway tile backsplash", category: "kitchens", orientation: "landscape" },
  { src: "/gallery/41.jpg", alt: "Range and microwave area with new subway tile backsplash and refinished white cabinets", category: "kitchens", orientation: "portrait" },

  // Bathrooms
  { src: "/gallery/22.jpg", alt: "Bathroom with white vanity, framed mirror, tiled shower stall, and tile floor", category: "bathrooms", orientation: "landscape" },
  { src: "/gallery/26.jpg", alt: "Tub surround with white subway tile and dark mosaic accent band, new shower fixtures and grab bars", category: "bathrooms", orientation: "landscape" },
  { src: "/gallery/27.jpg", alt: "Remodeled small bathroom with white vanity, tub-shower combo, and LVP flooring", category: "bathrooms", orientation: "landscape" },
  { src: "/gallery/36.jpg", alt: "Remodeled bathroom with built-in shelving niche, white vanity, and modern vanity light", category: "bathrooms", orientation: "portrait" },
  { src: "/gallery/37.jpg", alt: "Tub surround with large-format gray subway tile and centered niche", category: "bathrooms", orientation: "portrait" },
  { src: "/gallery/20.jpg", alt: "Fireplace surround tiled in large-format marble-look porcelain with matching extended hearth", category: "bathrooms", orientation: "landscape" },

  // Flooring
  { src: "/gallery/08.jpg", alt: "Custom hardwood floor with diamond inlay pattern installed in dining area", category: "flooring", orientation: "landscape" },
  { src: "/gallery/02.jpg", alt: "Open living area with dark hardwood floors, crown molding, and plantation shutters", category: "flooring", orientation: "landscape" },
  { src: "/gallery/03.jpg", alt: "Living room with dark hardwood flooring leading into a white kitchen with tray ceiling", category: "flooring", orientation: "landscape" },
  { src: "/gallery/06.jpg", alt: "Refinished dark-stained hardwood staircase looking down toward landing", category: "flooring", orientation: "portrait" },
  { src: "/gallery/35.jpg", alt: "Open-concept living area with dark hardwood floors leading to a remodeled kitchen", category: "flooring", orientation: "portrait" },
  { src: "/gallery/45.jpg", alt: "Hallway and dining area with dark hardwood floors, crown molding, and white shutters", category: "flooring", orientation: "portrait" },
  { src: "/gallery/63.jpg", alt: "Refinished dark hardwood living area with custom wrought-iron front door", category: "flooring", orientation: "landscape" },
  { src: "/gallery/43.jpg", alt: "Hallway with new light wood-look LVP flooring and freshly painted gray walls", category: "flooring", orientation: "landscape" },
  { src: "/gallery/59.jpg", alt: "Split staircase with new tan and gray carpet installed on stairs and landing", category: "flooring", orientation: "portrait" },
  { src: "/gallery/61.jpg", alt: "Wide-plank engineered hardwood install in progress, taped down during glue cure", category: "flooring", orientation: "portrait" },
  { src: "/gallery/66.jpg", alt: "Wide-plank engineered hardwood being glued and taped down during installation", category: "flooring", orientation: "portrait" },
  { src: "/gallery/68.jpg", alt: "Hand-scraped hardwood floor being installed and taped during glue cure", category: "flooring", orientation: "portrait" },

  // Carpentry, Paint & Finish Work
  { src: "/gallery/18.jpg", alt: "Built-in shiplap wet bar nook with granite countertop and undermount sink", category: "carpentry-finish", orientation: "landscape" },
  { src: "/gallery/39.jpg", alt: "Built-in nook with white shiplap walls and granite countertop with bar sink", category: "carpentry-finish", orientation: "landscape" },
  { src: "/gallery/19.jpg", alt: "Custom built-in closet shelving unit with hanging rod and side cubbies in white finish", category: "carpentry-finish", orientation: "landscape" },
  { src: "/gallery/21.jpg", alt: "Freshly painted gray staircase wall and white spindle railing during interior repaint", category: "carpentry-finish", orientation: "portrait" },
  { src: "/gallery/58.jpg", alt: "Freshly painted neutral gray room with skylight, beam accents, and new carpet", category: "carpentry-finish", orientation: "landscape" },
  { src: "/gallery/42.jpg", alt: "Aerial view of a custom stained wood shingle roof over a backyard structure", category: "carpentry-finish", orientation: "landscape" },

  // Renovations in Progress
  { src: "/gallery/40.jpg", alt: "Remodeled living room with new oversized black-frame sliding glass doors", category: "renovations", orientation: "landscape" },
  { src: "/gallery/65.jpg", alt: "Remodeled entry foyer with dark hardwood floors, tray ceiling, and crown molding", category: "renovations", orientation: "portrait" },
  { src: "/gallery/10.jpg", alt: "Interior demo with exposed framing and new sliding glass door installation in progress", category: "renovations", orientation: "landscape" },
  { src: "/gallery/32.jpg", alt: "Backyard structure framing in progress with new wood trusses being raised", category: "renovations", orientation: "landscape" },
  { src: "/gallery/29.jpg", alt: "In-progress kitchen remodel with new cabinets and subway tile backsplash being installed", category: "renovations", orientation: "landscape" },
  { src: "/gallery/33.jpg", alt: "Kitchen remodel in progress with stone backsplash being installed", category: "renovations", orientation: "landscape" },
  { src: "/gallery/49.jpg", alt: "Custom poured concrete countertop curing on top of a base cabinet during a remodel", category: "renovations", orientation: "landscape" },
  { src: "/gallery/52.jpg", alt: "Vaulted living room with brick fireplace and exposed beams — before remodel", category: "renovations", orientation: "landscape" },
  { src: "/gallery/54.jpg", alt: "Open-concept living and kitchen space mid-build with new flooring, drywall, and cabinets", category: "renovations", orientation: "landscape" },
  { src: "/gallery/47.jpg", alt: "Bedroom mid-repaint with windows and floor masked with paper and plastic", category: "renovations", orientation: "portrait" },
];

// Curated photos for the home page strip — best of each category.
export const FEATURED_PHOTOS: Photo[] = [
  PHOTOS.find((p) => p.src === "/gallery/13.jpg")!, // covered patio
  PHOTOS.find((p) => p.src === "/gallery/08.jpg")!, // diamond hardwood
  PHOTOS.find((p) => p.src === "/gallery/09.jpg")!, // white kitchen
  PHOTOS.find((p) => p.src === "/gallery/11.jpg")!, // horizontal fence
  PHOTOS.find((p) => p.src === "/gallery/26.jpg")!, // bath subway tile
  PHOTOS.find((p) => p.src === "/gallery/18.jpg")!, // shiplap wet bar
];

export const HERO_PHOTO = FEATURED_PHOTOS[0];

export const CATEGORY_ORDER: PhotoCategory[] = [
  "decks-patios",
  "fences",
  "flooring",
  "kitchens",
  "bathrooms",
  "carpentry-finish",
  "renovations",
];
