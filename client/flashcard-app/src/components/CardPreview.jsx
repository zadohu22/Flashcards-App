import React, { useState } from "react";
import EditBoolCard from "./EditBoolCard";
import EditChoiceCard from "./EditChoiceCard";
import EditDefinitionCard from "./EditDefinitionCard";

const CardPreview = ({
  cardInfo,
  clicked,
  setClicked,
  setAllCards,
  getAllCards,
  edit,
  setEdit,
}) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setClicked(!clicked);
    }
  };

  // definition card live update
  const [definitionTitle, setDefinitionTitle] = useState(cardInfo.title);
  const [changeDefinition, setChangeDefinition] = useState(cardInfo.definition);

  // choice card live update
  const [choiceTitle, setChoiceTitle] = useState(cardInfo.title);
  const [answers, setAnswers] = useState({
    A: cardInfo.answerOne,
    B: cardInfo.answerTwo,
    C: cardInfo.answerThree,
    D: cardInfo.answerFour,
  });
  const [correct, setCorrect] = useState({
    A: cardInfo.oneCorrect,
    B: cardInfo.twoCorrect,
    C: cardInfo.threeCorrect,
    D: cardInfo.fourCorrect,
  });

  // bool card live update
  const [boolTitle, setBoolTitle] = useState(cardInfo.title);
  const [boolSelection, setBoolSelection] = useState(cardInfo.selection);

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
            edit === true ? (
              <EditDefinitionCard
                prevTitle={cardInfo.title}
                prevDefinition={cardInfo.definition}
                cardId={cardInfo.id}
                setId={cardInfo.setId}
                setAllCards={setAllCards}
                getAllCards={getAllCards}
                setClicked={setEdit}
                clicked={edit}
                setDefinitionTitle={setDefinitionTitle}
                setChangeDefinition={setChangeDefinition}
              />
            ) : (
              <div className='flex flex-col items-center justify-center gap-4 relative'>
                <h2 className='text-3xl font-bold mt-4'>{definitionTitle}</h2>
                <p className='mb-20 text-center'>{changeDefinition}</p>
                <button onClick={() => setEdit(!edit)}>Edit Card</button>
              </div>
            )
          ) : cardInfo.cardType === "Choice" ? (
            edit === true ? (
              <EditChoiceCard
                prevTitle={cardInfo.title}
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
                setAnswers={setAnswers}
                setCorrect={setCorrect}
                setChoiceTitle={setChoiceTitle}
              />
            ) : (
              <div className='flex flex-col items-center justify-center gap-4 relative'>
                <h2 className='text-2xl mb-8 mt-4'>{choiceTitle}</h2>
                <div className='flex flex-col gap-2 flex-1'>
                  <div className='flex gap-4'>
                    <p>A) {answers.A}</p>
                    {(correct.A === 1 || correct.A === true) && <p>✔️</p>}
                  </div>
                  <hr></hr>

                  <div className='flex gap-4'>
                    <p>B) {answers.B}</p>
                    {(correct.B === 1 || correct.B === true) && <p>✔️</p>}{" "}
                  </div>
                  <hr></hr>

                  <div className='flex gap-4'>
                    <p>C) {answers.C}</p>
                    {(correct.C === 1 || correct.C === true) && <p>✔️</p>}{" "}
                  </div>
                  <hr></hr>

                  <div className='flex gap-4'>
                    <p>D) {answers.D}</p>
                    {(correct.D === 1 || correct.D === true) && <p>✔️</p>}{" "}
                  </div>
                </div>
                <button onClick={() => setEdit(!edit)}>Edit Card</button>
              </div>
            )
          ) : edit === true ? (
            <EditBoolCard
              prevTitle={cardInfo.title}
              prevSelection={cardInfo.selection}
              cardId={cardInfo.id}
              setId={cardInfo.setId}
              getAllCards={getAllCards}
              setAllCards={setAllCards}
              clicked={edit}
              setClicked={setEdit}
              setBoolTitle={setBoolTitle}
              setBoolSelection={setBoolSelection}
            />
          ) : (
            <div className='flex flex-col items-center justify-center gap-4 relative'>
              <h2 className='text-2xl mt-4 text-center'>{boolTitle}</h2>

              <div>
                <div className='flex gap-4'>
                  <p>Is True</p>
                  {boolSelection === 1 && <p>✔️</p>}
                </div>

                <div className='flex gap-4'>
                  <p>Is False</p>
                  {boolSelection === 0 && <p>✔️</p>}
                </div>
              </div>
              <button onClick={() => setEdit(!edit)}>Edit Card</button>
            </div>
          )}
        </label>
      </label>
    </>
  );
};

export default CardPreview;
