/**
 * Review Slider App
 *
 * Deze applicatie toont klantbeoordelingen in een carrouselvorm.
 * Gebruikers kunnen handmatig navigeren met de pijltjesknoppen,
 * en de slides wisselen automatisch elke 5 seconden.
 *
 * Hoofdcomponenten:
 * - App: Hoofdcomponent die de slider beheert en rendert.
 * - ReviewCard: Component voor het weergeven van individuele beoordelingen.
 * - Data: Statische gegevens voor beoordelingen.
 * - Types: TypeScript interfaces voor typeveiligheid.
 */

import { useCallback, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { peopleData } from "./data";
import { PEOPLE } from "./types";
import ReviewCard from "./components/ReviewCard";

function App() {
  const [people] = useState<PEOPLE[]>(peopleData);
  const [index, setIndex] = useState<number>(0);

  // Functie om naar de volgende/vorige slide te navigeren
  // Delta is het aantal stappen (bijv. 1 voor volgende, -1 voor vorige)
  // Gebruikt modulo om rond te gaan aan het einde/begin van de lijst
  const navigate = useCallback(
    (delta: number) => {
      setIndex(
        (prevIndex) => (prevIndex + delta + people.length) % people.length,
      );
    },
    [people.length],
  );

  // Functie om de positie van een persoon in de slider te bepalen
  // Retourneert CSS-klasse: 'activeSlide' voor huidige, 'lastSlide' voor vorige, 'nextSlide' voor anderen
  const getPosition = (personIndex: number): string => {
    if (personIndex === index) return "activeSlide";
    if (personIndex === (index - 1 + people.length) % people.length)
      return "lastSlide";
    return "nextSlide";
  };

  // useEffect voor automatische sliding elke 5 seconden
  // Stelt een interval in dat navigate(1) aanroept om naar volgende slide te gaan
  // Ruimt de interval op bij unmount of wanneer index/navigate verandert
  useEffect(() => {
    const slider = setInterval(() => {
      navigate(1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index, navigate]);

  const buttons = [
    { className: "prev", Icon: FiChevronLeft, onClick: () => navigate(-1) },
    { className: "next", Icon: FiChevronRight, onClick: () => navigate(1) },
  ];

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
        {buttons.map(({ className, Icon, onClick }) => (
          <button key={className} className={className} onClick={onClick}>
            <Icon />
          </button>
        ))}
      </div>
    </section>
  );
}

export default App;
