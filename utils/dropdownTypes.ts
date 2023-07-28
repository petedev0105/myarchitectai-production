export type themeType =
  | "Modern"
  | "Vintage"
  | "Minimalist"
  | "Professional"
  | "Tropical";

export type roomType =
  | "Living Room"
  | "Dining Room"
  | "Bedroom"
  | "Bathroom"
  | "Office"
  | "Gaming Room";

export type locationType = "Coastal" | "Cliff" | "Forest" | "Mountain";

export type houseStyleType =
  | "Modern"
  | "Contemporary"
  | "MineCraft"
  | "Traditional"
  | "Victorian"
  | "Gothic"
  | "Renaissance"
  | "Baroque"
  | "Art Deco"
  | "Art Nouveau"
  | "Mid-Century Modern"
  | "Minimalist"
  | "Brutalist"
  | "Postmodern"
  | "Neo-Classical"
  | "Colonial"
  | "Mediterranean"
  | "Scandinavian"
  | "Industrial"
  | "Japanese"
  | "Greek Revival"
  | "Bauhaus"
  | "Prairie"
  | "Tudor"
  | "Georgian"
  | "Neoclassical"
  | "International"
  | "Spanish Colonial"
  | "Ranch"
  | "Post-Modernism"
  | "Gothic Revival"
  | "Shingle"
  | "Beaux-Arts"
  | "Italianate"
  | "Mission Revival"
  | "Egyptian Revival"
  | "Chateauesque"
  | "Craftsman"
  | "Streamline Moderne"
  | "Contemporary Farmhouse"
  | "Deconstructivism";

export type seasonType = "Spring" | "Summer" | "Autumn" | "Winter";

export type materialType = "Wooden" | "Steel" | "Concrete" | "Marble" | "Brick";

export type lightingType =
  | "Ambient"
  | "Task"
  | "Accent"
  | "Decorative"
  | "Natural"
  | "Cozy"
  | "Futuristic";

  
export type interiorStyleType =
| "Minimalist Haven"
| "Modern Fusion"
| "MineCraft"
| "Industrial Loft"
| "Bohemian Oasis"
| "Coastal Breeze"
| "Desert Retreat"
| "Mountain Escape"
| "Victorian Elegance"
| "Art Deco Glamour"
| "Mid-Century Modern"
| "French Country Charm"
| "Colonial Classic"
| "Scandinavian Sanctuary"
| "Japanese Zen"
| "Moroccan Mystique"
| "Mediterranean Retreat"
| "Indian Exuberance"
| "Traveler's Trove"
| "Contemporary Elegance"
| "Cyber Eclectic Fusion"
| "Neon Noir"
| "Techno Wonderland"
| "Retro Futurism"
| "Digital Zen";

export type buildingType =
  | "Residential Home"
  | "Apartment/Condominium"
  | "Office Building"
  | "Retail Store/Shopping Center"
  | "Hotel/Resort"
  | "Restaurant/Cafe"
  | "School/Educational Institution"
  | "Hospital/Healthcare Facility"
  | "Warehouse/Industrial Building"
  | "Government Building"
  | "Cultural/Entertainment Center"
  | "Sports Facility"
  | "Religious Building"
  | "Transportation Hub"
  | "Exhibition/Convention Center"
  | "Recreation Center"
  | "Research Laboratory"
  | "Library"
  | "Park/Outdoor Space"
  | "Mixed-Use Development";

  export const buildingTypes: buildingType[] = [
    "Residential Home",
    "Apartment/Condominium",
    "Office Building",
    "Retail Store/Shopping Center",
    "Hotel/Resort",
    "Restaurant/Cafe",
    "School/Educational Institution",
    "Hospital/Healthcare Facility",
    "Warehouse/Industrial Building",
    "Government Building",
    "Cultural/Entertainment Center",
    "Sports Facility",
    "Religious Building",
    "Transportation Hub",
    "Exhibition/Convention Center",
    "Recreation Center",
    "Research Laboratory",
    "Library",
    "Park/Outdoor Space",
    "Mixed-Use Development",
  ];

  export type flooringType =
  | "Laminate flooring"
  | "Vinyl flooring"
  | "Hardwood flooring"
  | "Bamboo floor"
  | "Engineered wood"
  | "Lumber"
  | "Bamboo"
  | "Polished concrete"
  | "Brick"
  | "Vinyl"
  | "Ceramic"
  | "Porcelain tile"
  | "Tile flooring"
  | "Marble"
  | "Granite"
  | "Cork"
  | "Carpet"
  | "Linoleum flooring"
  | "Natural rubber";

export const floorings: flooringType[] = [
  "Laminate flooring",
  "Vinyl flooring",
  "Hardwood flooring",
  "Bamboo floor",
  "Engineered wood",
  "Lumber",
  "Bamboo",
  "Polished concrete",
  "Brick",
  "Vinyl",
  "Ceramic",
  "Porcelain tile",
  "Tile flooring",
  "Marble",
  "Granite",
  "Cork",
  "Carpet",
  "Linoleum flooring",
  "Natural rubber",
];

  

export const interiorStyles: interiorStyleType[] = [
  "Minimalist Haven",
  "Modern Fusion",
  "Industrial Loft",
  "Bohemian Oasis",
  "Coastal Breeze",
  "Desert Retreat",
  "Mountain Escape",
  "Victorian Elegance",
  "Art Deco Glamour",
  "Mid-Century Modern",
  "French Country Charm",
  "Colonial Classic",
  "Scandinavian Sanctuary",
  "Japanese Zen",
  "Moroccan Mystique",
  "Mediterranean Retreat",
  "Indian Exuberance",
  "Traveler's Trove",
  "Contemporary Elegance",
  "Cyber Eclectic Fusion",
  "Neon Noir",
  "Techno Wonderland",
  "Retro Futurism",
  "Digital Zen",
  ];

export const lightings: lightingType[] = [
  "Ambient",
  "Task",
  "Accent",
  "Decorative",
  "Natural",
  "Cozy",
  "Futuristic",
];

export const locations: locationType[] = [
  "Coastal",
  "Cliff",
  "Forest",
  "Mountain",
];
export const houseStyles: houseStyleType[] = [
  "Modern",
  "Contemporary",
  "Traditional",
  "Victorian",
  "Gothic",
  "Renaissance",
  "Baroque",
  "Art Deco",
  "Art Nouveau",
  "Mid-Century Modern",
  "Minimalist",
  "Brutalist",
  "Postmodern",
  "Neo-Classical",
  "Colonial",
  "Mediterranean",
  "Scandinavian",
  "Industrial",
  "Japanese",
  "Greek Revival",
  "Bauhaus",
  "Prairie",
  "Tudor",
  "Georgian",
  "Neoclassical",
  "International",
  "Spanish Colonial",
  "Ranch",
  "Post-Modernism",
  "Gothic Revival",
  "Shingle",
  "Beaux-Arts",
  "Italianate",
  "Mission Revival",
  "Egyptian Revival",
  "Chateauesque",
  "Craftsman",
  "Streamline Moderne",
  "Contemporary Farmhouse",
  "Deconstructivism",
];
export const seasons: seasonType[] = ["Spring", "Summer", "Autumn", "Winter"];
export const materials: materialType[] = [
  "Wooden",
  "Steel",
  "Concrete",
  "Marble",
  "Brick",
];

export const themes: themeType[] = [
  "Modern",
  "Minimalist",
  "Professional",
  "Tropical",
  "Vintage",
];
export const rooms: roomType[] = [
  "Living Room",
  "Dining Room",
  "Office",
  "Bedroom",
  "Bathroom",
  "Gaming Room",
];
