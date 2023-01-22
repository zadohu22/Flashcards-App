import React from "react";
import { useState } from "react";
import CreateCard from "../Requests/CreateCard";

const AddBoolCard = ({ id }) => {
  const [selection, setSelection] = useState(false);
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

  const handleCreateCard = () => {
    CreateCard(
      id,
      title,
      "Bool",
      setMsg,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      selection
    );
    console.log(selection);
  };

  // console.log(CreateCard(selection));
  return (
    <div className='mt-8 flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Add question'
        className='input w-full max-w-xs'
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputTrue'
          name='radio-4'
          className='radio radio-accent'
          onClick={() => setSelection(true)}
        />
        <label htmlFor='inputTrue'>True</label>
      </div>

      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputFalse'
          name='radio-4'
          className='radio radio-accent'
          onClick={() => setSelection(false)}
        />
        <label htmlFor='inputFalse'>False</label>
      </div>

      <button onClick={handleCreateCard}>Add Card</button>
    </div>
  );
};

export default AddBoolCard;
