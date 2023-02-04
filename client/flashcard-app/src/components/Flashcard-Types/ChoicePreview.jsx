import React, { useState } from "react";
import AddChoiceCard from "../AddChoiceCardTest";
import EditChoiceCard from "../EditChoiceCard";
import { getAllCards } from "../../Requests/GetAllCards";

const ChoicePreview = ({
  title,
  cardId,
  setId,
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  oneCorrect,
  twoCorrect,
  threeCorrect,
  fourCorrect,
  setAllCards,
}) => {
  const [clicked, setClicked] = useState(false);
  console.log("choice preview => {answerTwo}", answerTwo, setId);

  return (
    <>
      {clicked === true ? (
        <EditChoiceCard
          setId={setId}
          cardId={cardId}
          setAllCards={setAllCards}
          setClicked={setClicked}
          clicked={clicked}
          title={title}
          prevAnswerOne={answerOne}
          prevAnswerTwo={answerTwo}
          prevAnswerThree={answerThree}
          prevAnswerFour={answerFour}
          oneCorrect={oneCorrect}
          twoCorrect={twoCorrect}
          threeCorrect={threeCorrect}
          fourCorrect={fourCorrect}
          getAllCards={getAllCards}
        />
      ) : (
        <div className='card-preview'>
          <h2 className='text-2xl mb-8 mt-4'>{title}</h2>
          <div className='flex flex-col gap-2 flex-1'>
            <div className='flex gap-4'>
              <p>{answerOne}</p>
              {oneCorrect === 1 && <p>✔️</p>}
            </div>

            <div className='flex gap-4'>
              <p>{answerTwo}</p>
              {twoCorrect === 1 && <p>✔️</p>}
            </div>

            <div className='flex gap-4'>
              <p>{answerThree}</p>
              {threeCorrect === 1 && <p>✔️</p>}
            </div>

            <div className='flex gap-4'>
              <p>{answerFour}</p>
              {fourCorrect === 1 && <p>✔️</p>}
            </div>
            <button onClick={() => setClicked(!clicked)}>Edit Card</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChoicePreview;
