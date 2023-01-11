import React, { useState } from "react";
import "../../flip.css";

const FlashcardDefinition = ({ term, definition }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flip" : ""}`}
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <div className='flip-card-inner'>
        <div className='flip-card-front flex justify-center items-center'>
          <h1 className='text-2xl text-black'>{term}</h1>
        </div>
        <div className='flip-card-back flex justify-center items-center'>
          <h1 className='text-xl text-black'>{definition}</h1>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDefinition;
