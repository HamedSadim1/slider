/** Review slider carousel met auto-slide, navigation, en stats dashboard. */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { peopleData } from "./data";
import { PEOPLE } from "./types";
import ReviewCard from "./components/ReviewCard";
import StatsDashboard from "./components/StatsDashboard";

function App() {
  const [people] = useState<PEOPLE[]>(peopleData);
  const [index, setIndex] = useState<number>(0);

  const navigate = useCallback(
    (delta: number) => {
      setIndex(
        (prevIndex) => (prevIndex + delta + people.length) % people.length,
      );
    },
    [people.length],
  );

  const getPosition = (personIndex: number): string => {
    if (personIndex === index) return "active-slide";
    if (personIndex === (index - 1 + people.length) % people.length)
      return "last-slide";
    return "next-slide";
  };

  useEffect(() => {
    const slider = setInterval(() => {
      navigate(1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index, navigate]);

  // Swipe detection – DRY: eenmalige drempelwaarde als SSOT
  const touchX = useRef<{ start: number; end: number }>({ start: 0, end: 0 });
  const MIN_SWIPE = 50;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchX.current.start = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchX.current.end = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const { start, end } = touchX.current;
    const distance = start - end;

    if (distance > MIN_SWIPE) navigate(1);
    else if (distance < -MIN_SWIPE) navigate(-1);
  }, [navigate]);

  const buttons = [
    { className: "prev", Icon: FiChevronLeft, onClick: () => navigate(-1) },
    { className: "next", Icon: FiChevronRight, onClick: () => navigate(1) },
  ];

  return (
    <section className="section">
      <StatsDashboard people={people} />
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div
        className="section-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {people.map((person, personIndex) => (
          <ReviewCard
            key={person.id}
            person={person}
            position={getPosition(personIndex)}
          />
        ))}
        {buttons.map(({ className, Icon, onClick }) => (
          <button
            key={className}
            className={className}
            onClick={onClick}
            aria-label={className === "prev" ? "Previous review" : "Next review"}
          >
            <Icon />
          </button>
        ))}
        <div className="dots">
          {people.map((_, personIndex) => (
            <button
              key={personIndex}
              className={`dot${personIndex === index ? " active" : ""}`}
              onClick={() => setIndex(personIndex)}
              aria-label={`Go to slide ${personIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
