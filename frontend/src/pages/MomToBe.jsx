import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import PhotoCarousel from '../pages/PhotoCarousel';
import mom1 from '../assets/mom-2.jpeg';
import mom2 from '../assets/mom-3.jpeg';
import mom3 from '../assets/mom-1.jpeg';
const photos = [
  { url: mom1, alt: 'Photo 1' },
  { url: mom2, alt: 'Photo 2' },
  { url: mom3, alt: 'Photo 3' },
];
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
      <PhotoCarousel photos={photos} className="mt-[35px]" />
      <div className="w-full text-4xl font-bold text-center flex justify-center items-center font-yeseva mt-8">
        Moms to be
      </div>
      {info && (
        <div className="mt-12">
          <ProductList data={info} />
        </div>
      )}
    </div>
  );
};

export default MomToBe;
