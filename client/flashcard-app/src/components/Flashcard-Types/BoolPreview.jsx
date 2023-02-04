import React from "react";
import { useState } from "react";
import EditBoolCard from "../EditBoolCard";

const BoolPreview = ({
  title,
  selection,
  cardId,
  setId,
  getAllCards,
  setAllCards,
}) => {
  console.log(selection);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {clicked === true ? (
        <EditBoolCard
          title={title}
          selection={selection}
          getAllCards={getAllCards}
          cardId={cardId}
          setId={setId}
          getAllCard={getAllCards}
          setAllCards={setAllCards}
          clicked={clicked}
          setClicked={setClicked}
        />
      ) : (
        <div className='card-preview'>
          <h2 className='text-2xl mt-4 text-center'>{title}</h2>
          <div className='mb-28'>
            <div className='flex gap-4'>
              <p>Is True</p>
              {selection === 1 && <p>✔️</p>}
            </div>

            <div className='flex gap-4'>
              <p>Is False</p>
              {selection === 0 && <p>✔️</p>}
            </div>
          </div>
          <button onClick={() => setClicked(!clicked)}>Edit Card</button>
        </div>
      )}
    </>
  );
};

export default BoolPreview;
