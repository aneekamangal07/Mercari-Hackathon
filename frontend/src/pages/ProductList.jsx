import React from 'react';
import ProductCard from './ProductCard';
const ProductList = ({ data }) => {
  return (
    <div className="flex mt-[25px] gap-[100px]">
      {data.map((item) => (
        <ProductCard data={item} key={item._id} />
      ))}
    </div>
  );
};

export default ProductList;
