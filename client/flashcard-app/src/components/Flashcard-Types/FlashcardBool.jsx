import React from "react";
import axios from "axios";

const FlashcardBool = ({
  currentCard,
  setBoolChecked,
  boolSelectedOption,
  setBoolSelectedOption,
}) => {
  const handleOptionChange = (event) => {
    setBoolSelectedOption(event.target.value);
  };

  return (
    <div className='w-[70%] min-h-[300px] p-8 shadow-2xl bg-slate-600 rounded-xl text-black flex flex-col justify-around items-center'>
      <h1 className='text-xl'>{currentCard.title}</h1>

      <form className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            value='optionTrue'
            checked={boolSelectedOption === "optionTrue"}
            className='radio radio-secondary'
            id='inputTrue'
            onClick={() => setBoolChecked({ selection: 1 })}
            onChange={handleOptionChange}
          />
          <label htmlFor='inputTrue'>True</label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            value='optionFalse'
            className='radio radio-secondary'
            id='inputFalse'
            checked={boolSelectedOption === "optionFalse"}
            onClick={() => setBoolChecked({ selection: 0 })}
            onChange={handleOptionChange}
          />
          <label htmlFor='inputFalse'>False</label>
        </div>
      </form>
    </div>
  );
};

export default FlashcardBool;
