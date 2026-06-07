import { useEffect } from "react";
import { AUTO_SLIDE_INTERVAL_MS } from "../constants";

export function useAutoSlide(
  index: number,
  navigate: (delta: number) => void,
  interval = AUTO_SLIDE_INTERVAL_MS,
) {
  useEffect(() => {
    const slider = setInterval(() => navigate(1), interval);
    return () => clearInterval(slider);
  }, [index, navigate, interval]);
}
