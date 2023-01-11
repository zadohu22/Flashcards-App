import React from "react";
import { useLocation } from "react-router-dom";

const SetsPage = () => {
  const location = useLocation();

  console.log(location.state.nameOfSet);

  return (
    <div className='flex justify-center'>
      <h1 className='text-3xl absolute top-4'>
        {location.state.nameOfSet} Set
      </h1>
    </div>
  );
};

export default SetsPage;
