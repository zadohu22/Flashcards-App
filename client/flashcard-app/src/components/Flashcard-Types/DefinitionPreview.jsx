import React from "react";
import { useState } from "react";
import { UpdateCard } from "../../Requests/UpdateCard";
const DefinitionPreview = ({
  title,
  definition,
  cardId,
  setId,
  setAllCards,
  getAllCards,
  setClicked,
  clicked,
}) => {
  // const [clicked, setClicked] = useState(false);
  // const [cardTitle, setCardTitle] = useState(title);
  // const [cardDefinition, setCardDefinition] = useState(definition);

  return (
    <div className='flex flex-col items-center justify-center gap-4 relative'>
      <h2 className='text-3xl font-bold mt-4'>{title}</h2>
      <p className='mb-20 text-center'>{definition}</p>
      <button className='w-24 mb-4' onClick={() => setClicked(!clicked)}>
        Edit
      </button>
    </div>
  );
};

export default DefinitionPreview;
