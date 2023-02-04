import React from "react";
import { useState } from "react";
import { UpdateCard } from "../Requests/UpdateCard";

const EditBoolCard = ({
  title,
  selection,
  cardId,
  setId,
  getAllCards,
  setAllCards,
  clicked,
  setClicked,
}) => {
  const [msg, setMsg] = useState("");
  const [cardTitle, setCardTitle] = useState(title);
  const [cardSelection, setCardSelection] = useState(selection);

  const handleSendUpdate = async () => {
    await UpdateCard(
      setId,
      cardId,
      cardTitle,
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
      cardSelection
    );
    await getAllCards(setId, setAllCards);
    setClicked(!clicked);
  };
  return (
    <div className='mt-8 flex flex-col gap-4 relative'>
      <p
        className='absolute top-0 right-4 cursor-pointer text-xl'
        onClick={() => setClicked(!clicked)}
      >
        x
      </p>
      <input
        type='text'
        placeholder='Add question'
        className='input w-full max-w-xs'
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputTrue'
          name='radio-4'
          className='radio radio-accent'
          onClick={() => setCardSelection(true)}
        />
        <label htmlFor='inputTrue'>True</label>
      </div>

      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputFalse'
          name='radio-4'
          className='radio radio-accent'
          onClick={() => setCardSelection(false)}
        />
        <label htmlFor='inputFalse'>False</label>
      </div>

      <button onClick={handleSendUpdate}>Save Changes</button>
    </div>
  );
};

export default EditBoolCard;
