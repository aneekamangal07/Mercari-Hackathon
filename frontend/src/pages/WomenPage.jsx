import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mom from '../assets/Mom.jpeg';
import Women from '../assets/Women.jpeg';
import Mood from '../assets/28.jpeg';
const WomenPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%]">
      <div className="flex h-[88vh] text-black font-bold items-center justify-center text-2xl opacity-2">
        <div
          className="w-1/3 flex h-[80vh] justify-center items-start pt-[230px] hover:scale-110 pr-[20px]"
          onClick={() => navigate('/women-fashion')}
          style={{
            backgroundImage: `url(${Women})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          Fashion
        </div>
        <div
          className="w-1/3 flex h-[80vh] justify-end items-start hover:scale-110 px-4 py-10"
          onClick={() => navigate('/women-mood')}
          style={{
            backgroundImage: `url(${Mood})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          Styles By Mood
        </div>
        <div
          className="w-1/3 flex h-[80vh] justify-center items-center hover:scale-110"
          style={{
            backgroundImage: `url(${Mom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => navigate('/moms')}
        >
          Moms to be
        </div>
      </div>
    </div>
  );
};

export default WomenPage;
