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
      title,
      answers.answerOne,
      answers.answerTwo,
      answers.answerThree,
      answers.answerFour,
      true
    );
  };

  return (
    <div className='mt-8 flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Add Question'
        className='input w-full max-w-xs'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='First answer'
        className='input w-full max-w-xs'
        onChange={(e) => handleAnswerChange(e, "answerOne")}
      />
      <input
        type='text'
        placeholder='Second answer'
        className='input w-full max-w-xs'
        onChange={(e) => handleAnswerChange(e, "answerTwo")}
      />
      <input
        type='text'
        placeholder='Third answer'
        className='input w-full max-w-xs'
        onChange={(e) => handleAnswerChange(e, "answerThree")}
      />
      <input
        type='text'
        placeholder='Fourth Answer'
        className='input w-full max-w-xs'
        onChange={(e) => handleAnswerChange(e, "answerFour")}
      />
      <button onClick={handleCreateCard}>Add Card</button>
    </div>
  );
};

export default AddChoiceCard;
