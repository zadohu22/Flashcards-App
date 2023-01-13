import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AddBoolCard from "./AddBoolCard";
import AddChoiceCard from "./AddChoiceCard";
import AddDefinitionCard from "./AddDefinitionCard";

const SetsPage = () => {
  const location = useLocation();
  const [selectedCardType, setSelectedCardType] = useState();
  const [modalClosed, setModalClosed] = useState(false);

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
      <h1 className='text-3xl text-center my-4'>
        {location.state.nameOfSet} set has an id of {location.state.setId}
      </h1>

      <div className='flex flex-col gap-8 items-center'>
        <p>You have no flashcards in this set</p>
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
              <AddDefinitionCard />
            ) : selectedCardType === "Multiple Choice" ? (
              <AddChoiceCard />
            ) : selectedCardType === "True/False" ? (
              <AddBoolCard />
            ) : (
              ""
            )}
          </label>
        </label>
      </div>
    </>
  );
};

export default SetsPage;
