import React, { useCallback, useRef } from "react";
import { SWIPE_MIN_DISTANCE_PX } from "../constants";
import { extractTouchX } from "../utils";

export function useSwipe(onSwipe: (delta: number) => void) {
  const touchX = useRef({ start: 0, end: 0 });

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchX.current.start = extractTouchX(e);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchX.current.end = extractTouchX(e);
  }, []);

  const handleTouchEnd = useCallback(() => {
    const { start, end } = touchX.current;
    const distance = start - end;

    if (Math.abs(distance) > SWIPE_MIN_DISTANCE_PX) {
      onSwipe(distance > 0 ? 1 : -1);
    }
  }, [onSwipe]);

  return { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd };
}
