import React from "react";
import axios from "axios";

const FlashcardChoice = () => {
  const handleSubmit = () => {};

  return (
    <div className='w-[300px] h-[300px] bg-primary text-black flex flex-col justify-around items-center'>
      <h1 className='text-xl'>Title</h1>

      <form className='flex flex-col gap-2 self-start' onSubmit={handleSubmit}>
        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputTrue'
          />
          <label htmlFor='inputTrue'>True</label>
        </div>

        <div className='flex gap-2'>
          <input
            type='radio'
            name='radio-4'
            className='radio radio-secondary'
            id='inputFalse'
          />
          <label htmlFor='inputFalse'>False</label>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default FlashcardChoice;
