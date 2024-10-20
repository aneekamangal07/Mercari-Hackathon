import React, { useEffect, useState } from 'react';
import Mood from '../assets/mood.avif';
import ProductList from './ProductList';
const StyleByMood = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(
        'https://mercari-backend.onrender.com/api/products/category/Mood Clothing',
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsondata = await response.json();
      console.log('data ', jsondata);
      setInfo(jsondata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 text-5xl font-bold text-center flex justify-center items-center font-yeseva ">
          Styles By Mood
        </div>
        <img className="w-1/3 h-[40vh]" src={Mood} alt="Mood" />
      </div>
      {info && (
        <div>
          {' '}
          <ProductList data={info} />
        </div>
      )}
    </div>
  );
};

export default StyleByMood;
