/**
 * TypeScript interfaces
 *
 * Definieert de structuur voor persoon-objecten in de applicatie.
 */

export interface PEOPLE {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

export type SlidePosition = "active-slide" | "last-slide" | "next-slide";
