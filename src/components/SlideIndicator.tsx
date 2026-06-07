import React from "react";
import { getSlideAriaLabel } from "../utils";

interface SlideIndicatorProps {
  count: number;
  activeIndex: number;
  onChange: (index: number) => void;
}

/** Indicator dots om direct naar een slide te navigeren. */
const SlideIndicator: React.FC<SlideIndicatorProps> = ({
  count,
  activeIndex,
  onChange,
}) => (
  <div className="dots">
    {Array.from({ length: count }, (_, i) => (
      <button
        key={i}
        className={`dot${i === activeIndex ? " active" : ""}`}
        onClick={() => onChange(i)}
        aria-label={getSlideAriaLabel(i + 1)}
      />
    ))}
  </div>
);

export default React.memo(SlideIndicator);
