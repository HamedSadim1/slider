import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { PEOPLE, SlidePosition } from "../types";

interface ReviewCardProps {
  person: PEOPLE;
  position: SlidePosition;
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

export default React.memo(ReviewCard);
