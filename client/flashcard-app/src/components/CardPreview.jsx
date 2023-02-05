import React, { useState } from "react";
import EditChoiceCard from "./EditChoiceCard";

const CardPreview = ({
  cardInfo,
  clicked,
  setClicked,
  setAllCards,
  getAllCards,
}) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setClicked(!clicked);
    }
  };

  const [edit, setEdit] = useState(false);

  return (
    <>
      <input
        type='checkbox'
        id={`my-modal-${cardInfo.id}-${cardInfo.title}`}
        className='modal-toggle'
        defaultChecked
      />
      <label
        htmlFor={`my-modal-${cardInfo.id}-${cardInfo.title}`}
        className='modal cursor-pointer'
        onClick={handleCloseModal}
      >
        <label className='modal-box relative' htmlFor='null'>
          {cardInfo.cardType === "Definition" ? (
            <div className='flex flex-col items-center justify-center gap-4 relative'>
              <h2 className='text-3xl font-bold mt-4'>{cardInfo.title}</h2>
              <p className='mb-20 text-center'>{cardInfo.definition}</p>
            </div>
          ) : cardInfo.cardType === "Choice" ? (
            edit === true ? (
              <EditChoiceCard
                title={cardInfo.title}
                cardId={cardInfo.id}
                setId={cardInfo.setId}
                prevAnswerOne={cardInfo.answerOne}
                prevAnswerTwo={cardInfo.answerTwo}
                prevAnswerThree={cardInfo.answerThree}
                prevAnswerFour={cardInfo.answerFour}
                setAllCards={setAllCards}
                getAllCards={getAllCards}
                clicked={edit}
                setClicked={setEdit}
              />
            ) : (
              <div className='flex flex-col items-center justify-center gap-4 relative'>
                <h2 className='text-2xl mb-8 mt-4'>{cardInfo.title}</h2>
                <div className='flex flex-col gap-2 flex-1'>
                  <div className='flex gap-4'>
                    <p>{cardInfo.answerOne}</p>
                    {cardInfo.oneCorrect === 1 && <p>✔️</p>}
                  </div>

                  <div className='flex gap-4'>
                    <p>{cardInfo.answerTwo}</p>
                    {cardInfo.twoCorrect === 1 && <p>✔️</p>}
                  </div>

                  <div className='flex gap-4'>
                    <p>{cardInfo.answerThree}</p>
                    {cardInfo.threeCorrect === 1 && <p>✔️</p>}
                  </div>

                  <div className='flex gap-4'>
                    <p>{cardInfo.answerFour}</p>
                    {cardInfo.fourCorrect === 1 && <p>✔️</p>}
                  </div>
                </div>
                <button onClick={() => setEdit(!edit)}>Edit Card</button>
              </div>
            )
          ) : (
            <div className='flex flex-col items-center justify-center gap-4 relative'>
              <h2 className='text-2xl mt-4 text-center'>{cardInfo.title}</h2>
              <div>
                <div className='flex gap-4'>
                  <p>Is True</p>
                  {cardInfo.selection === 1 && <p>✔️</p>}
                </div>

                <div className='flex gap-4'>
                  <p>Is False</p>
                  {cardInfo.selection === 0 && <p>✔️</p>}
                </div>
              </div>
            </div>
          )}
        </label>
      </label>
    </>
  );
};

export default CardPreview;
