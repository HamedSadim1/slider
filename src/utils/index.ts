/* ============================================
   Utility functies – DRY helper functions
   ============================================ */

import React from "react";
import { SlidePosition, PEOPLE } from "../types";

/* ---------- Index / wrap ---------- */

/** Wrap een index modulo length (ondersteunt negatieve delta's). */
export const wrapIndex = (
  index: number,
  delta: number,
  length: number,
): number => (index + delta + length) % length;

/* ---------- Slide position ---------- */

/** Bepaalt de SlidePosition van een persoon t.o.v. de actieve slide. */
export const getSlidePosition = (
  personIndex: number,
  activeIndex: number,
  totalSlides: number,
): SlidePosition => {
  if (personIndex === activeIndex) return "active-slide";
  if (personIndex === wrapIndex(activeIndex, -1, totalSlides))
    return "last-slide";
  return "next-slide";
};

/* ---------- Touch events ---------- */

/** Extraheert de X-coördinaat van een touch event. */
export const extractTouchX = (e: React.TouchEvent): number =>
  e.touches[0].clientX;

/* ---------- Aria labels ---------- */

/** Genereert een aria-label voor een indicator dot. */
export const getSlideAriaLabel = (slideNumber: number): string =>
  `Go to slide ${slideNumber}`;

/* ---------- Stats ---------- */

/** Telt het aantal unieke titels in een lijst van personen. */
export const countUniqueRoles = (people: PEOPLE[]): number =>
  new Set(people.map((p) => p.title)).size;

interface WordsAndNameLength {
  totalWords: number;
  maxNameLength: number;
}

/** Telt het totaal aantal woorden en de langste naam in een lijst. */
export const aggregateWordsAndNameLength = (
  people: PEOPLE[],
): WordsAndNameLength =>
  people.reduce(
    (acc, p) => ({
      totalWords: acc.totalWords + p.quote.split(/\s+/).length,
      maxNameLength: Math.max(acc.maxNameLength, p.name.length),
    }),
    { totalWords: 0, maxNameLength: 0 },
  );
