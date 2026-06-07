/** Review slider carousel met auto-slide, swipe, navigatie en stats dashboard. */

import { useCallback, useState } from "react";
import { peopleData } from "./data";
import { useAutoSlide } from "./hooks/useAutoSlide";
import { useSwipe } from "./hooks/useSwipe";
import { getSlidePosition, wrapIndex } from "./utils";
import ReviewCard from "./components/ReviewCard";
import StatsDashboard from "./components/StatsDashboard";
import SectionTitle from "./components/SectionTitle";
import SliderNavButtons from "./components/SliderNavButtons";
import SlideIndicator from "./components/SlideIndicator";

function App() {
  const [index, setIndex] = useState<number>(0);

  const navigate = useCallback(
    (delta: number) => {
      setIndex((prevIndex) => wrapIndex(prevIndex, delta, peopleData.length));
    },
    [],
  );

  const getPosition = (personIndex: number) =>
    getSlidePosition(personIndex, index, peopleData.length);

  useAutoSlide(index, navigate);
  const swipeHandlers = useSwipe(navigate);

  return (
    <section className="section">
      <StatsDashboard people={peopleData} />
      <SectionTitle />
      <div className="section-center" {...swipeHandlers}>
        {peopleData.map((person, personIndex) => (
          <ReviewCard
            key={person.id}
            person={person}
            position={getPosition(personIndex)}
          />
        ))}
        <SliderNavButtons navigate={navigate} />
        <SlideIndicator
          count={peopleData.length}
          activeIndex={index}
          onChange={setIndex}
        />
      </div>
    </section>
  );
}

export default App;
