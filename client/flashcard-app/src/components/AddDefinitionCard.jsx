import React from "react";

const AddDefinitionCard = () => {
  return (
    <div className='mt-8 flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Add Term'
        className='input w-full max-w-xs'
      />
      <textarea className='textarea' placeholder='Add definition'></textarea>
      <button>Add Card</button>
    </div>
  );
};

export default AddDefinitionCard;
