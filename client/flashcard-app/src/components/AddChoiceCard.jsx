import React from "react";

const AddChoiceCard = () => {
  return (
    <div className='mt-8 flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Add Question'
        className='input w-full max-w-xs'
      />
      <input
        type='text'
        placeholder='First answer'
        className='input w-full max-w-xs'
      />{" "}
      <input
        type='text'
        placeholder='Second answer'
        className='input w-full max-w-xs'
      />{" "}
      <input
        type='text'
        placeholder='Third answer'
        className='input w-full max-w-xs'
      />{" "}
      <input
        type='text'
        placeholder='Fourth Answer'
        className='input w-full max-w-xs'
      />
      <button>Add Card</button>
    </div>
  );
};

export default AddChoiceCard;
