/**
 * ReviewCard Component
 *
 * Deze component rendert een individuele klantbeoordeling,
 * inclusief afbeelding, naam, titel en citaat.
 */

import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { PEOPLE } from "../types";

interface ReviewCardProps {
  person: PEOPLE;
  position: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ person, position }) => {
  const { id, image, name, title, quote } = person;
  return (
    <article key={id} className={position}>
      <div className="content">
        <img src={image} alt={name} className="person-img" />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon" />
      </div>
    </article>
  );
};

export default ReviewCard;
