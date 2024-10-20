import React from 'react';
import Fashion from '../assets/fashion.webp';
import ProductList from './ProductList';
const WomenSpecificPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 text-5xl font-bold text-center flex justify-center items-center font-yeseva">
          Fashion
        </div>
        <img className="w-1/3 h-[40vh]" src={Fashion} alt="fashion" />
      </div>
      <div className="mt-5">
        <ProductList />
      </div>
    </div>
  );
};
export default WomenSpecificPage;
