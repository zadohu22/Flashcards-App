import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import CardPreview from "./CardPreview";
import { DeleteCard } from "../Requests/DeleteCard";

const SetsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCardType, setSelectedCardType] = useState();
  const [allCards, setAllCards] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [edit, setEdit] = useState(false);
  const [msg, setMsg] = useState("");

  const setId = `${location.state.setId}`;

  useEffect(() => {
    getAllCards(setId, setAllCards, allCards);
  }, []);

  useEffect(() => {
    displayAllCardsBasic(allCards);
  }, [allCards]);

  const handleViewCard = (card) => {
    setClicked(!clicked);
    setCardInfo(card);
    console.log(cardInfo);
  };

  const handleDeleteCard = async (card, setId, setAllCards) => {
    try {
      console.log(setId, setAllCards);
      await DeleteCard(card.id, setMsg, setId, setAllCards, allCards);
      // await getAllCards(setId, setAllCards, allCards);
      console.log("getcards");
      await getAllCards(setId, setAllCards);
    } catch (error) {
      console.log(error);
    }

    displayAllCardsBasic(allCards);
    console.log("from handleDeleteCard", allCards);
  };

  const displayAllCardsBasic = (cards) => {
    return allCards.map((card, index) => {
      return (
        <div key={index} className='card-preview mb-4'>
          <p className='select-none'>{card.cardType} Card</p>
          <h2 className='break-words text-xl'>{card.title}</h2>
          <div className='flex w-full justify-center items-center gap-4 mb-2'>
            <button onClick={() => handleViewCard(card)}>View Card</button>
            <button
              className='hover:bg-error hover:text-white'
              onClick={() => handleDeleteCard(card, setId, setAllCards)}
            >
              Delete Card
            </button>
          </div>
        </div>
      );
    });
  };

  const handlePlayGameClick = () => {
    navigate("/play", { state: { allCards: allCards, setId: setId } });
  };

  const handleSelectMenu = (e) => {
    setSelectedCardType(e.target.innerText);
    console.log(selectedCardType);
  };

  const handleResetDefaultSelected = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedCardType("defaultSelected");
    }
  };

  return (
    <>
      {clicked && (
        <CardPreview
          cardInfo={cardInfo}
          setClicked={setClicked}
          clicked={clicked}
          setAllCards={setAllCards}
          getAllCards={getAllCards}
          edit={edit}
          setEdit={setEdit}
        />
      )}

      <h1 className='text-3xl text-center mb-4'>{location.state.nameOfSet}</h1>

      <div className='flex flex-col gap-8 items-center'>
        {allCards.length === 0 && <p>You have no flashcards in this set</p>}

        <label htmlFor='my-modal-addCard' className='btn btn-outline'>
          Add a flashcard!
        </label>
        {allCards.length !== 0 && (
          <button onClick={handlePlayGameClick}>Play Game</button>
        )}

        <input type='checkbox' id='my-modal-addCard' className='modal-toggle' />
        <label
          htmlFor='my-modal-addCard'
          className='modal cursor-pointer'
          onClick={handleResetDefaultSelected}
        >
          <label className='modal-box relative'>
            <h1 className='mb-4'>New Flashcard</h1>
            <select
              value={selectedCardType}
              className='select select-secondary w-full max-w-xs'
              onChange={(e) => setSelectedCardType(e.target.value)}
            >
              <option disabled value='defaultSelected'>
                Which type of flashcard?
              </option>
              <option>Definition</option>
              <option>Multiple Choice</option>
              <option>True/False</option>
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
        {displayAllCardsBasic(allCards)}
      </div>
    </>
  );
};

export default SetsPage;
