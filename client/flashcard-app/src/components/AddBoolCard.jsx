import React from "react";

const AddBoolCard = () => {
  return (
    <div className='mt-8 flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Add question'
        className='input w-full max-w-xs'
      />
      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputTrue'
          name='radio-4'
          className='radio radio-accent'
        />
        <label htmlFor='inputTrue'>True</label>
      </div>

      <div className='flex gap-2'>
        <input
          type='radio'
          id='inputFalse'
          name='radio-4'
          className='radio radio-accent'
        />
        <label htmlFor='inputFalse'>False</label>
      </div>

      <button>Add Card</button>
    </div>
  );
};

export default AddBoolCard;
