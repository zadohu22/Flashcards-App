import React, { useState } from "react";
import { UpdateCard } from "../Requests/UpdateCard";

const EditChoiceCard = ({
  prevTitle,
  cardId,
  setId,
  prevAnswerOne,
  prevAnswerTwo,
  prevAnswerThree,
  prevAnswerFour,
  setAllCards,
  getAllCards,
  clicked,
  setClicked,
  setAnswers,
  setCorrect,
  setChoiceTitle,
}) => {
  // const [cardTitle, setCardTitle] = useState(title);
  const [msg, setMsg] = useState("");

  const [newCardAnswers, setNewCardAnswers] = useState({
    newAnswerOne: prevAnswerOne,
    newAnswerTwo: prevAnswerTwo,
    newAnswerThree: prevAnswerThree,
    newAnswerFour: prevAnswerFour,
  });

  const [newTitle, setNewTitle] = useState(prevTitle);

  // const [newAnswers, setNewAnswers] = useState({
  //   newAnswerOne: "",
  //   newAnswerTwo: "",
  //   newAnswerThree: "",
  //   newAnswerFour: "",
  // });

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
    setNewCardAnswers({
      ...newCardAnswers,
      [answerName]: e.target.value,
    });
  };

  const handleSendUpdate = async () => {
    await UpdateCard(
      null,
      cardId,
      newTitle,
      "Choice",
      setMsg,
      null,
      newCardAnswers.newAnswerOne,
      correctAnswer.oneCorrect,
      newCardAnswers.newAnswerTwo,
      correctAnswer.twoCorrect,
      newCardAnswers.newAnswerThree,
      correctAnswer.threeCorrect,
      newCardAnswers.newAnswerFour,
      correctAnswer.fourCorrect
    );
    await getAllCards(setId, setAllCards);
    console.log(setId);
    setClicked(!clicked);
    setAnswers({
      A: newCardAnswers.newAnswerOne,
      B: newCardAnswers.newAnswerTwo,
      C: newCardAnswers.newAnswerThree,
      D: newCardAnswers.newAnswerFour,
    });
    setCorrect({
      A: correctAnswer.oneCorrect,
      B: correctAnswer.twoCorrect,
      C: correctAnswer.threeCorrect,
      D: correctAnswer.fourCorrect,
    });
    setChoiceTitle(newTitle);
  };

  return (
    <div className='mt-8 flex flex-col gap-4 relative'>
      <p
        className='absolute top-[-20px] right-4 cursor-pointer text-xl'
        onClick={async () => {
          await getAllCards(setId, setAllCards);
          setClicked(!clicked);
        }}
      >
        x
      </p>
      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='Add Question'
          className='input w-full max-w-xs'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <p className='self-center'>Correct Answer?</p>
      </div>

      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='First answer'
          className='input w-full max-w-xs'
          onChange={(e) => handleAnswerChange(e, "newAnswerOne")}
          value={newCardAnswers.newAnswerOne}
        />
        <input
          type='radio'
          name='radio-4'
          className='radio radio-accent self-center'
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

      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='Second answer'
          className='input w-full max-w-xs'
          onChange={(e) => handleAnswerChange(e, "newAnswerTwo")}
          value={newCardAnswers.newAnswerTwo}
        />
        <input
          type='radio'
          name='radio-4'
          className='radio radio-accent self-center'
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

      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='Third answer'
          className='input w-full max-w-xs'
          onChange={(e) => handleAnswerChange(e, "newAnswerThree")}
          value={newCardAnswers.newAnswerThree}
        />
        <input
          type='radio'
          name='radio-4'
          className='radio radio-accent self-center'
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

      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='Fourth answer'
          className='input w-full max-w-xs'
          onChange={(e) => handleAnswerChange(e, "newAnswerFour")}
          value={newCardAnswers.newAnswerFour}
        />
        <input
          type='radio'
          name='radio-4'
          className='radio radio-accent self-center'
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

      <button onClick={handleSendUpdate}>Save changes</button>
    </div>
  );
};

export default EditChoiceCard;
