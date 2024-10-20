import React from 'react';
import Mood from '../assets/mood.avif';
const StyleByMood = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 text-5xl font-bold text-center flex justify-center items-center font-yeseva ">
          Styles By Mood
        </div>
        <img className="w-1/3 h-[40vh]" src={Mood} alt="Mood" />
      </div>
      <div>
        <div>Products</div>
      </div>
    </div>
  );
};

export default StyleByMood;
