import { useCallback, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { peopleData } from "./data";
import { PEOPLE } from "./types";
import ReviewCard from "./components/ReviewCard";

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
    if (personIndex === index) return "activeSlide";
    if (personIndex === (index - 1 + people.length) % people.length)
      return "lastSlide";
    return "nextSlide";
  };

  useEffect(() => {
    const slider = setInterval(() => {
      navigate(1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index, navigate]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => (
          <ReviewCard
            key={person.id}
            person={person}
            position={getPosition(personIndex)}
          />
        ))}
        <button className="prev" onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => navigate(1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
