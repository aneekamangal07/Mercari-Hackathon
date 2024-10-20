import React, { useEffect, useState } from 'react';
import Fashion from '../assets/fashion.webp';
import ProductList from './ProductList';

const WomenSpecificPage = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const [accessoriesResponse, homeDecorResponse] = await Promise.all([
        fetch(
          'https://mercari-backend.onrender.com/api/products/category/Accessories',
        ),
        fetch(
          'https://mercari-backend.onrender.com/api/products/category/Home Decor',
        ),
      ]);
      const accessoriesData = await accessoriesResponse.json();
      const homeDecorData = await homeDecorResponse.json();

      const combinedData = [...accessoriesData, ...homeDecorData];

      console.log(combinedData);
      setInfo(homeDecorData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 text-5xl font-bold text-center flex justify-center items-center font-yeseva">
          Fashion
        </div>
        <img className="w-1/3 h-[40vh]" src={Fashion} alt="fashion" />
      </div>
      {info && (
        <div>
          <ProductList data={info} />
        </div>
      )}
    </div>
  );
};
export default WomenSpecificPage;
