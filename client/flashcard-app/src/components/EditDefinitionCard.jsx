import React from "react";
import { UpdateCard } from "../Requests/UpdateCard";
import { getAllCards } from "../Requests/GetAllCards";
import { useState } from "react";

const EditDefinitionCard = ({
  cardInfo,
  prevTitle,
  prevDefinition,
  cardId,
  setId,
  setAllCards,
  setClicked,
  clicked,
  setDefinitionTitle,
  setChangeDefinition,
}) => {
  // const [cardTitle, setCardTitle] = useState(title);
  // const [cardDefinition, setCardDefinition] = useState(definition);
  const [msg, setMsg] = useState("");

  const [newTitle, setNewTitle] = useState(prevTitle);
  const [newDefinition, setNewDefinition] = useState(prevDefinition);

  const handleSendUpdate = async () => {
    await UpdateCard(
      null,
      cardId,
      newTitle,
      "Definition",
      setMsg,
      newDefinition
    );
    await getAllCards(setId, setAllCards);
    setClicked(!clicked);
    setDefinitionTitle(newTitle);
    setChangeDefinition(newDefinition);
  };

  return (
    <div className='relative h-[500px]  border-gray-50 border-2 rounded-lg flex flex-col items-center justify-around'>
      <p
        className='absolute top-0 right-4 cursor-pointer text-xl'
        onClick={async () => {
          await getAllCards(setId, setAllCards);
          setClicked(!clicked);
        }}
      >
        x
      </p>
      <p className='relative top-4'>Change Title:</p>
      <input
        type='text'
        className='mt-4 max-w-[90%] rounded px-2'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <p className='mt-8'>Change Definition:</p>
      <textarea
        className='textarea border-2 border-gray-100 h-44 w-[90%] hide-scroll-bars resize-none'
        onChange={(e) => setNewDefinition(e.target.value)}
        value={newDefinition}
      ></textarea>
      <button className='mt-2' onClick={handleSendUpdate}>
        Save Changes
      </button>
    </div>
  );
};

export default EditDefinitionCard;
