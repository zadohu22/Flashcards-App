import React, { useState } from "react";
import "../../flip.css";

const FlashcardDefinition = ({ currentCard }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flip" : ""}`}
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <div className='flip-card-inner'>
        <div className='flip-card-front flex justify-center items-center bg-secondary'>
          <h1 className='text-2xl text-black flex-wrap'>{currentCard.title}</h1>
        </div>
        <div className='flip-card-back flex justify-center items-center bg-secondary flex-wrap w-full h-full'>
          <h1 className='text-xl text-black flex-wrap wrap w-full h-full break-words'>
            {currentCard.definition}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDefinition;
