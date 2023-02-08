import React from "react";
import { useState } from "react";
import { UpdateCard } from "../Requests/UpdateCard";

const EditBoolCard = ({
  prevTitle,
  prevSelection,
  cardId,
  setId,
  getAllCards,
  setAllCards,
  clicked,
  setClicked,
  setBoolTitle,
  setBoolSelection,
}) => {
  const [msg, setMsg] = useState("");
  // const [cardTitle, setCardTitle] = useState(title);
  // const [cardSelection, setCardSelection] = useState(selection);

  const [newBoolTitle, setNewBoolTitle] = useState(prevTitle);
  const [newBoolSelection, setNewBoolSelection] = useState(prevSelection);

  const handleSendUpdate = async () => {
    await UpdateCard(
      setId,
      cardId,
      newBoolTitle,
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
      newBoolSelection
    );
    await getAllCards(setId, setAllCards);
    setClicked(!clicked);
    setBoolTitle(newBoolTitle);
    setBoolSelection(newBoolSelection);
  };
  return (
    <div className='mt-8 flex flex-col gap-4 relative'>
      <p
        className='absolute top-0 right-4 cursor-pointer text-xl'
        onClick={async () => {
          await getAllCards(setId, setAllCards);
          setClicked(!clicked);
        }}
      >
        x
      </p>
      <input
        type='text'
        placeholder='Add question'
        className='input w-full max-w-xs'
        value={newBoolTitle}
        onChange={(e) => setNewBoolTitle(e.target.value)}
      />
      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputTrue'
          name='radio-4'
          className='radio radio-accent'
          onClick={() => setNewBoolSelection(1)}
        />
        <label htmlFor='inputTrue'>True</label>
      </div>

      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputFalse'
          name='radio-4'
          className='radio radio-accent'
          onClick={() => setNewBoolSelection(0)}
        />
        <label htmlFor='inputFalse'>False</label>
      </div>

      <button onClick={handleSendUpdate}>Save Changes</button>
    </div>
  );
};

export default EditBoolCard;
