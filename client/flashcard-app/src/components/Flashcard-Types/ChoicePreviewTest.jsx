import React from "react";
import { useState } from "react";
import { UpdateCard } from "../../Requests/UpdateCard";
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
  const [cardTitle, setCardTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [cardAnswers, setCardAnswers] = useState({
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: "",
  });

  const [correctAnswer, setCorrectAnswer] = useState({
    oneCorrect: false,
    twoCorrect: false,
    threeCorrect: false,
    fourCorrect: false,
  });

  const handleCorrectAnswer = (correct, wrong1, wrong2, wrong3) => {
    setCorrectAnswer({
      [correct]: true,
      [wrong1]: false,
      [wrong2]: false,
      [wrong3]: false,
    });
  };

  const handleAnswerChange = (e, answerName) => {
    setCardAnswers({
      ...cardAnswers,
      [answerName]: e.target.value,
    });
  };

  const handleSendUpdate = async () => {
    await UpdateCard(
      null,
      cardId,
      cardTitle,
      "Choice",
      setMsg,
      null,
      cardAnswers.answerOne,
      correctAnswer.oneCorrect,
      cardAnswers.answerTwo,
      correctAnswer.twoCorrect,
      cardAnswers.answerThree,
      correctAnswer.threeCorrect,
      cardAnswers.answerFour,
      correctAnswer.fourCorrect
    );
    await getAllCards(setId, setAllCards);
    setClicked(!clicked);
  };

  return (
    <>
      {clicked === true ? (
        <div className='relative h-72 w-72 border-gray-50 border-2 rounded-lg flex flex-col gap-4 items-center'>
          <p
            className='text-xl absolute top-0 right-4 cursor-pointer'
            onClick={() => setClicked(!clicked)}
          >
            x
          </p>
          <div className='flex w-[90%] mt-[25px]'>
            <div>
              <input type='text' className='max-w-[90%]' value={title} />
            </div>
            <p>Correct?</p>
          </div>

          <div className='flex w-[90%] items-center'>
            <div>
              <input
                type='text'
                className='max-w-[90%]'
                value={answerOne}
                onChange={(e) => handleAnswerChange(e, "answerOne")}
              />
            </div>
            <input
              type='radio'
              name='radio-4'
              className='radio radio-accent'
              onClick={() =>
                handleCorrectAnswer(
                  "oneCorrect",
                  "twoCorrect",
                  "threeCorrect",
                  "fourCorrect"
                )
              }
            />
          </div>

          <div className='flex w-[90%] items-center'>
            <div>
              <input
                type='text'
                className='max-w-[90%]'
                value={answerTwo}
                onChange={(e) => handleAnswerChange(e, "answerTwo")}
              />
            </div>
            <input
              type='radio'
              name='radio-4'
              className='radio radio-accent'
              onClick={() =>
                handleCorrectAnswer(
                  "twoCorrect",
                  "oneCorrect",
                  "threeCorrect",
                  "fourCorrect"
                )
              }
            />
          </div>

          <div className='flex w-[90%] items-center'>
            <div>
              <input
                type='text'
                className='max-w-[90%]'
                value={answerThree}
                onChange={(e) => handleAnswerChange(e, "answerThree")}
              />
            </div>
            <input
              type='radio'
              name='radio-4'
              className='radio radio-accent'
              onClick={() =>
                handleCorrectAnswer(
                  "threeCorrect",
                  "oneCorrect",
                  "twoCorrect",
                  "fourCorrect"
                )
              }
            />
          </div>

          <div className='flex w-[90%] items-center'>
            <div>
              <input
                type='text'
                className='max-w-[90%]'
                value={answerFour}
                onChange={(e) => handleAnswerChange(e, "answerFour")}
              />
            </div>
            <input
              type='radio'
              name='radio-4'
              className='radio radio-accent'
              onClick={() =>
                handleCorrectAnswer(
                  "fourCorrect",
                  "oneCorrect",
                  "twoCorrect",
                  "threeCorrect"
                )
              }
            />
          </div>
          <button className='absolute bottom-2' onClick={handleSendUpdate}>
            Save Changes
          </button>
        </div>
      ) : (
        <div className='card-preview'>
          <h2 className='text-2xl mb-8 mt-4'>{title}</h2>
          <div className='flex flex-col gap-4 flex-1'>
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
          </div>
          <button onClick={() => setClicked(!clicked)}>Edit Card</button>
        </div>
      )}
    </>
  );
};

export default ChoicePreview;
