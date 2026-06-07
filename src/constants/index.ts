/* ============================================
   Centrale constanten – Single Source of Truth
   ============================================ */

/* ---------- Timing ---------- */

/** Interval (ms) waarna de slider automatisch naar de volgende slide gaat. */
export const AUTO_SLIDE_INTERVAL_MS = 5000;

/** Minimale swipe-afstand (px) om als swipe te worden geregistreerd. */
export const SWIPE_MIN_DISTANCE_PX = 50;

/* ---------- Labels ---------- */

/** Titeltekst in de section header. */
export const SECTION_TITLE_TEXT = "reviews";

/* ---------- Aria labels ---------- */

/** Aria-label voor de vorige-knop. */
export const ARIA_LABEL_PREVIOUS = "Previous review";

/** Aria-label voor de volgende-knop. */
export const ARIA_LABEL_NEXT = "Next review";

/* ---------- Stats config ---------- */

interface StatConfig {
  label: string;
  suffix: string;
  icon: string;
}

/** Configuratie voor de stat-dashboard kaarten (zonder de dynamische waarde). */
export const STATS_CONFIG: readonly StatConfig[] = [
  { label: "Total Reviews", suffix: "", icon: "★" },
  { label: "Unique Roles", suffix: "", icon: "◆" },
  { label: "Avg. Words", suffix: " /review", icon: "✎" },
  { label: "Max Name Len", suffix: " chars", icon: "●" },
] as const;
