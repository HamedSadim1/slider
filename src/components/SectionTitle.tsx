import React from "react";
import { SECTION_TITLE_TEXT } from "../constants";

/** Section title met decoratief /-pictogram en gradient underline. */
const SectionTitle: React.FC = () => (
  <div className="title">
    <h2>
      <span>/</span>{SECTION_TITLE_TEXT}
    </h2>
  </div>
);

export default React.memo(SectionTitle);
