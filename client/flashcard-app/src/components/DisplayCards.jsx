import React, { useState } from "react";
import axios from "axios";
import FlashcardBool from "./Flashcard-Types/FlashcardBool";
import FlashcardDefinition from "./Flashcard-Types/FlashcardDefinition";
import FlashcardChoice from "./Flashcard-Types/FlashcardChoice";

const DisplayCards = async (req, res, setId) => {
  const [allCards, setAllCards] = useState([]);
  try {
    const getAllCards = await axios.get("http://localhost:5000/getAllCards", {
      headers: {
        setId: `${setId}`,
      },
    });
    setAllCards([...getAllCards.data]);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      {allCards.map((card) => {
        console.log([card.title]);
      })}
    </div>
  );
};

export default DisplayCards;
