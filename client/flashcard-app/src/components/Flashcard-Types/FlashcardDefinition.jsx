import React, { useState } from "react";
import FlashcardBase from "./FlashcardBase";
import "../../flip.css";
import CardFlip from "react-card-flip";

const FlashcardDefinition = ({ term, definition }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <FlashcardBase>
      <div
        className='w-full h-full flex justify-center items-center cursor-pointer'
        onClick={() => setFlipped(!flipped)}
      >
        <CardFlip
          isFlipped={flipped}
          flipDirection='horizontal'
          // className='card-flipper'
        >
          <div
            className='card-front'
            // onClick={() => setFlipped(!flipped)}
          >
            {term}
          </div>
          <div
            className='card-back'
            // onClick={() => setFlipped(!flipped)}
          >
            {definition}
          </div>
        </CardFlip>
      </div>
    </FlashcardBase>
  );
};

export default FlashcardDefinition;
