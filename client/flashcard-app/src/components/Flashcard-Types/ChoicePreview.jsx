import React from "react";

const ChoicePreview = ({
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
  return (
    <div className='card-preview'>
      <h2 className='text-2xl mb-8 mt-4'>{title}</h2>
      <div className='flex flex-col gap-4 flex-1'>
        <div className='flex gap-4'>
          <p>{answerOne}</p>
          {oneCorrect === 1 && <p>✔️</p>}
        </div>

        <div className='flex gap-4'>
          <p>{answerTwo}</p>
          {twoCorrect === 1 && <p>✔️</p>}
        </div>

        <div className='flex gap-4'>
          <p>{answerThree}</p>
          {threeCorrect === 1 && <p>✔️</p>}
        </div>

        <div className='flex gap-4'>
          <p>{answerFour}</p>
          {fourCorrect === 1 && <p>✔️</p>}
        </div>
      </div>
    </div>
  );
};

export default ChoicePreview;
