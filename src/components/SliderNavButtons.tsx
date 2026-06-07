import React, { useMemo } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { ARIA_LABEL_PREVIOUS, ARIA_LABEL_NEXT } from "../constants";

interface SliderNavButtonsProps {
  navigate: (delta: number) => void;
}

/** Vorige/vorige navigatieknoppen voor de slider. */
const SliderNavButtons: React.FC<SliderNavButtonsProps> = ({ navigate }) => {
  const buttons = useMemo(
    () => [
      {
        className: "prev",
        Icon: FiChevronLeft,
        onClick: () => navigate(-1),
        ariaLabel: ARIA_LABEL_PREVIOUS,
      },
      {
        className: "next",
        Icon: FiChevronRight,
        onClick: () => navigate(1),
        ariaLabel: ARIA_LABEL_NEXT,
      },
    ],
    [navigate],
  );

  return (
    <>
      {buttons.map(({ className, Icon, onClick, ariaLabel }) => (
        <button
          key={className}
          className={className}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          <Icon />
        </button>
      ))}
    </>
  );
};

export default React.memo(SliderNavButtons);
