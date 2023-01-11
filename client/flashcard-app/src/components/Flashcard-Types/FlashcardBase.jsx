import React from "react";

const FlashcardBase = ({ children }) => {
  return (
    <div className='card w-96 h-64 bg-secondary opacity-60 text-black shadow-xl'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default FlashcardBase;
