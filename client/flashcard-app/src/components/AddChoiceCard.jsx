import React, { useState } from "react";
import CreateCard from "../Requests/CreateCard";

const AddChoiceCard = ({ id }) => {
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

  const [answers, setAnswers] = useState({
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
    setAnswers({
      ...answers,
      [answerName]: e.target.value,
    });
  };

  const handleCreateCard = () => {
    CreateCard(
      id,
      title,
      "Choice",
      setMsg,
      null,
      answers.answerOne,
      correctAnswer.oneCorrect,
      answers.answerTwo,
      correctAnswer.twoCorrect,
      answers.answerThree,
      correctAnswer.threeCorrect,
      answers.answerFour,
      correctAnswer.fourCorrect
    );
  };

  return (
    <div className='mt-8 flex flex-col gap-4'>
      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='Add Question'
          className='input w-full max-w-xs'
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className='self-center'>Correct Answer?</p>
      </div>

      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='First answer'
          className='input w-full max-w-xs'
          onChange={(e) => handleAnswerChange(e, "answerOne")}
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
          onChange={(e) => handleAnswerChange(e, "answerTwo")}
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
          onChange={(e) => handleAnswerChange(e, "answerThree")}
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
          onChange={(e) => handleAnswerChange(e, "answerFour")}
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

      <button onClick={handleCreateCard}>Add Card</button>
    </div>
  );
};

export default AddChoiceCard;
