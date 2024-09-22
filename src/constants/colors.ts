// Main palette color enum
export type MainColorPaletteType =
  | "pakistan-green"
  | "field-drab"
  | "chestnut"
  | "brunswick-green";

// Main color name to color code Record, to keep the palette homogeneous across the code
export const MainColorPalette: Record<MainColorPaletteType, string> = {
  "pakistan-green": "#273e0a",
  "field-drab": "#6f6406",
  chestnut: "#8d4a3a",
  "brunswick-green": "#165c51",
};
// Main color name to secondary color code Record, to keep the palette homogeneous across the code
export const SecondaryColorPalette: Record<MainColorPaletteType, string> = {
  "pakistan-green": "#828f71",
  "field-drab": "#dfd261",
  chestnut: "#dc8570",
  "brunswick-green": "#90bcac",
};

export const LightColorCode = "#e9e5d9"; //Alabaster;
