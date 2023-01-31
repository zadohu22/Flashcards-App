import React from "react";
import { useState } from "react";
import AddDefinitionCard from "../AddDefinitionCard";

const DefinitionPreview = ({ title, definition, cardId, setId }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className='card-preview'>
        <h2 className='text-2xl mt-4'>{title}</h2>
        <p className='mb-20 text-center'>{definition}</p>
        <button className='w-24 mb-4'>Edit</button>
      </div>
    </>
  );
};

export default DefinitionPreview;
