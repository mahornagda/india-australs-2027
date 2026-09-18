export type Place = {
  name: string;
  lat: number;
  lon: number;
  region: string;
  /** Label nudge, for the crowded parts of the sheet. */
  dx?: number;
  dy?: number;
  flip?: boolean;
};

export const DELHI = { name: "New Delhi", lat: 28.61, lon: 77.21 };

export const places: Place[] = [
  { name: "India", lat: 22.0, lon: 79.0, region: "South Asia", dx: -12, dy: 20, flip: true },
  { name: "Sri Lanka", lat: 7.87, lon: 80.77, region: "South Asia", dx: 11, dy: 6 },
  { name: "Bangladesh", lat: 23.68, lon: 90.36, region: "South Asia", dx: 11, dy: 7 },
  { name: "Nepal", lat: 28.39, lon: 84.12, region: "South Asia", dx: 11, dy: -5 },
  { name: "Philippines", lat: 12.88, lon: 121.77, region: "South East Asia", dx: 11, dy: 2 },
  { name: "Malaysia", lat: 4.21, lon: 101.98, region: "South East Asia", dx: -12, dy: 0, flip: true },
  { name: "Singapore", lat: 1.35, lon: 103.82, region: "South East Asia", dx: 11, dy: 12 },
  { name: "Indonesia", lat: -2.5, lon: 118.0, region: "South East Asia", dx: 11, dy: 8 },
  { name: "Vietnam", lat: 14.06, lon: 108.28, region: "South East Asia", dx: -12, dy: -4, flip: true },
  { name: "Macau", lat: 22.2, lon: 113.54, region: "North East Asia", dx: 11, dy: 12 },
  { name: "China", lat: 35.86, lon: 104.2, region: "North East Asia", dx: -12, dy: -7, flip: true },
  { name: "South Korea", lat: 35.91, lon: 127.77, region: "North East Asia", dx: -12, dy: -8, flip: true },
  { name: "Japan", lat: 36.2, lon: 138.25, region: "North East Asia", dx: 11, dy: 3 },
  { name: "New Zealand", lat: -41.0, lon: 174.0, region: "Oceania", dx: -12, dy: 4, flip: true },
  { name: "Australia", lat: -25.27, lon: 133.78, region: "Oceania", dx: 11, dy: 4 },
  { name: "USA", lat: 39.0, lon: -98.0, region: "Beyond Australasia", dx: 11, dy: 3 },
  { name: "Colombia", lat: 4.57, lon: -74.3, region: "Beyond Australasia", dx: 11, dy: 3 },
  { name: "Serbia", lat: 44.02, lon: 21.01, region: "Beyond Australasia", dx: 11, dy: 3 },
];

// Equirectangular window, cropped to the part of the world this tournament reaches.
export const WIN = { lonMin: -112, lonMax: 182, latMax: 62, latMin: -50, k: 4 };
export const project = (lat: number, lon: number) => ({
  x: (lon - WIN.lonMin) * WIN.k,
  y: (WIN.latMax - lat) * WIN.k,
});
export const MAP_W = (WIN.lonMax - WIN.lonMin) * WIN.k;
export const MAP_H = (WIN.latMax - WIN.latMin) * WIN.k;
