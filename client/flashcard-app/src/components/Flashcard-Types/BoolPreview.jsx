import React from "react";

const BoolPreview = ({ title, selection }) => {
  console.log(selection);
  return (
    <div className='card-preview'>
      <h2 className='text-2xl mt-4 text-center'>{title}</h2>
      <div className='mb-28'>
        <div className='flex gap-4'>
          <p>Is True</p>
          {selection === 1 && <p>✔️</p>}
        </div>

        <div className='flex gap-4'>
          <p>Is False</p>
          {selection === 0 && <p>✔️</p>}
        </div>
      </div>
    </div>
  );
};

export default BoolPreview;
