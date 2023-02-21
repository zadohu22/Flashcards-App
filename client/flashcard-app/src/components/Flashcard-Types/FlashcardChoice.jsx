import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const FlashcardChoice = ({
  currentCard,
  setAnswerChecked,
  selectedOption,
  setSelectedOption,
}) => {
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCorrectAnswer = (correct, wrong1, wrong2, wrong3) => {
    setAnswerChecked({
      [correct]: 1,
      [wrong1]: 0,
      [wrong2]: 0,
      [wrong3]: 0,
    });
  };

  return (
    // <div className='w-full h-full flex justify-center items-center'>
    <div className='w-[70%] md:w-[50%] max-w-2xl h-[300px] p-8 shadow-2xl bg-slate-600 rounded-xl text-black flex flex-col justify-around items-center mx-auto'>
      <h1 className='text-xl mb-8'>{currentCard.title}</h1>

      <form className='flex flex-col gap-2 self-start'>
        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputOne'
            value='option1'
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            onClick={() =>
              handleCorrectAnswer(
                "oneCorrect",
                "twoCorrect",
                "threeCorrect",
                "fourCorrect"
              )
            }
          />
          <label className='select-none' htmlFor='inputOne'>
            {currentCard.answerOne}
          </label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary select-none'
            id='inputTwo'
            value='option2'
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            onClick={() =>
              handleCorrectAnswer(
                "twoCorrect",
                "oneCorrect",
                "threeCorrect",
                "fourCorrect"
              )
            }
          />
          <label className='select-none' htmlFor='inputTwo'>
            {currentCard.answerTwo}
          </label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputThree'
            value='option3'
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
            onClick={() =>
              handleCorrectAnswer(
                "threeCorrect",
                "oneCorrect",
                "twoCorrect",
                "fourCorrect"
              )
            }
          />
          <label className='select-none' htmlFor='inputThree'>
            {currentCard.answerThree}
          </label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputFour'
            value='option4'
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
            onClick={() =>
              handleCorrectAnswer(
                "fourCorrect",
                "oneCorrect",
                "twoCorrect",
                "threeCorrect"
              )
            }
          />
          <label className='select-none' htmlFor='inputFour'>
            {currentCard.answerFour}
          </label>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default FlashcardChoice;
