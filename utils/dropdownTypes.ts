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
  | "Farm House"
  | "Cottage"
  | "Mid-Century Modern"
  | "Contemporary"
  | "Mediterranean";

export type seasonType = "Spring" | "Summer" | "Autumn" | "Winter";

export type materialType = "Wooden" | "Steel" | "Concrete" | "Marble" | "Brick";

export const locations: locationType[] = [
  "Coastal",
  "Cliff",
  "Forest",
  "Mountain",
];
export const houseStyles: houseStyleType[] = [
  "Modern",
  "Farm House",
  "Cottage",
  "Mid-Century Modern",
  "Contemporary",
  "Mediterranean",
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
