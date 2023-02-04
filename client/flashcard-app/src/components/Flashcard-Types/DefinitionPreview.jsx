import React from "react";
import { useState } from "react";
import { UpdateCard } from "../../Requests/UpdateCard";
import { getAllCards } from "../../Requests/GetAllCards";
const DefinitionPreview = ({
  title,
  definition,
  cardId,
  setId,
  setAllCards,
}) => {
  const [clicked, setClicked] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);
  const [cardDefinition, setCardDefinition] = useState(definition);
  const [msg, setMsg] = useState("");

  const handleSendUpdate = async () => {
    await UpdateCard(
      null,
      cardId,
      cardTitle,
      "Definition",
      setMsg,
      cardDefinition
    );
    await getAllCards(setId, setAllCards);
    setClicked(!clicked);
  };

  return (
    <>
      {clicked === true ? (
        <div className='relative h-72 w-72 border-gray-50 border-2 rounded-lg flex flex-col items-center'>
          <p
            className='text-xl absolute top-0 right-2 cursor-pointer'
            onClick={() => setClicked(!clicked)}
          >
            x
          </p>
          <p className='relative top-4'>Change Title:</p>
          <input
            type='text'
            className='mt-4 max-w-[90%] rounded px-2'
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <p className='mt-8'>Change Definition:</p>
          <textarea
            className='textarea border-2 border-gray-100'
            onChange={(e) => setCardDefinition(e.target.value)}
            value={cardDefinition}
          ></textarea>
          <button className='mt-2' onClick={handleSendUpdate}>
            Save Changes
          </button>
        </div>
      ) : (
        <div className='card-preview'>
          <h2 className='text-2xl mt-4'>{title}</h2>
          <p className='mb-20 text-center'>{definition}</p>
          <button className='w-24 mb-4' onClick={() => setClicked(!clicked)}>
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default DefinitionPreview;
