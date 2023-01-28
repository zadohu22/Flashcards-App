import React from "react";
import axios from "axios";

const FlashcardChoice = ({
  title,
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  oneCorrect,
  twoCorrect,
  threeCorrect,
  fourCorrect,
}) => {
  const handleSubmit = () => {};

  return (
    <div className='w-[300px] h-[300px] bg-primary text-black flex flex-col justify-around items-center'>
      <h1 className='text-xl'>{title}</h1>

      <form className='flex flex-col gap-2 self-start' onSubmit={handleSubmit}>
        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputOne'
          />
          <label htmlFor='inputOne'>{answerOne}</label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputTwo'
          />
          <label htmlFor='inputTwo'>{answerTwo}</label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputThree'
          />
          <label htmlFor='inputThree'>{answerThree}</label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputFour'
          />
          <label htmlFor='inputFour'>{answerFour}</label>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default FlashcardChoice;
