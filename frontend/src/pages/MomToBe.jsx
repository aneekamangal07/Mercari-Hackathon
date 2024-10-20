import React from 'react';
import Mom1 from '../assets/mom1.jpg';
const MomToBe = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 text-5xl font-bold text-center flex justify-center items-center font-yeseva">
          Moms to be
        </div>
        <img className="w-1/3 h-[40vh]" src={Mom1} alt="mom" />
      </div>
      <div>
        <div>Products</div>
      </div>
    </div>
  );
};

export default MomToBe;
