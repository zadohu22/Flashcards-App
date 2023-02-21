import React from "react";
import { useState } from "react";
import CreateCard from "../Requests/CreateCard";

const AddDefinitionCard = ({ id, setAllCards, getAllCards }) => {
  const [title, setTitle] = useState("");
  const [definition, setDefinition] = useState("");
  const [msg, setMsg] = useState("");
  console.log(id);

  const handleCreateCard = async () => {
    await CreateCard(id, title, "Definition", setMsg, definition);
    await getAllCards(id, setAllCards);
  };

  return (
    <div className='mt-8 flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Add Term'
        className='input w-full max-w-xs'
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className='textarea border-2 border-gray-100'
        placeholder='Add definition'
        onChange={(e) => setDefinition(e.target.value)}
      ></textarea>
      <button onClick={handleCreateCard}>Add Card</button>
    </div>
  );
};

export default AddDefinitionCard;
