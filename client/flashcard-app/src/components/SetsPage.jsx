import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AddBoolCard from "./AddBoolCard";
import AddChoiceCard from "./AddChoiceCard";
import AddDefinitionCard from "./AddDefinitionCard";
import axios from "axios";
import FlashcardBool from "./Flashcard-Types/FlashcardBool";
import FlashcardDefinition from "./Flashcard-Types/FlashcardDefinition";
import FlashcardChoice from "./Flashcard-Types/FlashcardChoice";
import DefinitionPreview from "./Flashcard-Types/DefinitionPreview";
import ChoicePreview from "./Flashcard-Types/ChoicePreview";
import BoolPreview from "./Flashcard-Types/BoolPreview";
import { useEffect } from "react";
import { getAllCards } from "../Requests/GetAllCards";
import CreateCard from "../Requests/CreateCard";

const SetsPage = () => {
  const location = useLocation();
  const [selectedCardType, setSelectedCardType] = useState();
  const [modalClosed, setModalClosed] = useState(false);
  const [allCards, setAllCards] = useState([]);
  const [test, setTest] = useState(false);

  const setId = `${location.state.setId}`;

  useEffect(() => {
    getAllCards(setId, setAllCards, allCards);
    // displayAllCards(allCards);
  }, []);

  useEffect(() => {
    displayAllCards(allCards);
    console.log("from use effect", allCards);
  }, [allCards]);

  const displayAllCards = (cards) => {
    return allCards.map((card) => {
      if (card.cardType === "Definition") {
        return (
          <DefinitionPreview
            title={card.title}
            definition={card.definition}
            cardId={card.id}
            setId={setId}
          />
        );
      } else if (card.cardType === "Choice") {
        return (
          <ChoicePreview
            title={card.title}
            answerOne={card.answerOne}
            answerTwo={card.answerTwo}
            answerThree={card.answerThree}
            answerFour={card.answerFour}
            oneCorrect={card.oneCorrect}
            twoCorrect={card.twoCorrect}
            threeCorrect={card.threeCorrect}
            fourCorrect={card.fourCorrect}
          />
        );
      } else if (card.cardType === "Bool") {
        return <BoolPreview title={card.title} selection={card.selection} />;
      }
    });
  };

  const handleSelectMenu = (e) => {
    setSelectedCardType(e.target.innerText);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedCardType("defaultSelected");
    }
  };

  return (
    <>
      <h1 className='text-3xl text-center my-4'>{location.state.nameOfSet}</h1>

      <div className='flex flex-col gap-8 items-center'>
        {allCards.length === 0 && <p>You have no flashcards in this set</p>}

        <label htmlFor='my-modal-4' className='btn btn-outline'>
          Add a flashcard!
        </label>

        <input type='checkbox' id='my-modal-4' className='modal-toggle' />
        <label
          htmlFor='my-modal-4'
          className='modal cursor-pointer'
          onClick={handleModalClick}
        >
          <label className='modal-box relative'>
            <h1 className='mb-4'>New Flashcard</h1>
            <select
              value={selectedCardType}
              className='select select-secondary w-full max-w-xs'
            >
              <option disabled selected value='defaultSelected'>
                Which type of flashcard?
              </option>
              <option onClick={handleSelectMenu}>Definition</option>
              <option onClick={handleSelectMenu}>Multiple Choice</option>
              <option onClick={handleSelectMenu}>True/False</option>
            </select>
            {selectedCardType === "Definition" ? (
              <AddDefinitionCard
                id={location.state.setId}
                setAllCards={setAllCards}
                getAllCards={getAllCards}
              />
            ) : selectedCardType === "Multiple Choice" ? (
              <AddChoiceCard
                id={location.state.setId}
                setAllCards={setAllCards}
                getAllCards={getAllCards}
              />
            ) : selectedCardType === "True/False" ? (
              <AddBoolCard
                id={location.state.setId}
                setAllCards={setAllCards}
                getAllCards={getAllCards}
              />
            ) : (
              ""
            )}
          </label>
        </label>
      </div>
      <div className='w-full h-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-4'>
        {displayAllCards(allCards)}
      </div>
    </>
  );
};

export default SetsPage;
