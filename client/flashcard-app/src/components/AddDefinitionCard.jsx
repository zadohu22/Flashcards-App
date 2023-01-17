import React from "react";
import { useState } from "react";
import CreateCard from "../Requests/CreateCard";

const AddDefinitionCard = ({ id }) => {
  const [title, setTitle] = useState("");
  const [definition, setDefinition] = useState("");
  const [msg, setMsg] = useState("");
  console.log(id);

  const handleCreateCard = () => {
    CreateCard(id, title, "Definition", setMsg, definition);
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
        className='textarea'
        placeholder='Add definition'
        onChange={(e) => setDefinition(e.target.value)}
      ></textarea>
      <button onClick={handleCreateCard}>Add Card</button>
    </div>
  );
};

export default AddDefinitionCard;
