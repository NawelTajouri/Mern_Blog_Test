import React from "react";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div>
      <div className="arrows">
        <span className="prev" onClick={prevSlide}>
          &#10094;
        </span>
        <span className="next" onClick={nextSlide}>
          &#10095;
        </span>
      </div>
    </div>
  );
};

export default Arrows;
