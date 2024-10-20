import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Mom1 from '../assets/mom1.jpg';
const MomToBe = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(
        'https://mercari-backend.onrender.com/api/products/category/Maternity Wear',
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
        <div className="w-1/2 text-5xl font-bold text-center flex justify-center items-center font-yeseva">
          Moms to be
        </div>
        <img className="w-1/3 h-[40vh]" src={Mom1} alt="mom" />
      </div>
      {info && (
        <div>
          <ProductList data={info} />
        </div>
      )}
    </div>
  );
};

export default MomToBe;
