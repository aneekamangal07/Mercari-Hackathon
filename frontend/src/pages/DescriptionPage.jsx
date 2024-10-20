import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { MdSaveAlt } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const DescriptionPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://mercari-backend.onrender.com/api/products/id/${id}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsondata = await response.json();
      console.log('data ', jsondata.product);
      setInfo(jsondata.product);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/2 h-screen flex items-center justify-center p-4 pr-6">
        <img
          src={
            info.image_url ||
            'https://m.media-amazon.com/images/I/51vC37KDe9L._AC_UY580_.jpg'
          }
          alt={info.name}
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="font-semibold text-2xl flex justify-normal w-full">
          {info.name || 'Product Title'}
        </div>
        <div className="flex items-start w-full mt-4 font-medium p-3">
          ¥<span className="font-semibold text-xl">{info.price || '0'}</span>
        </div>
        <div className="flex items-start w-full">
          <div className="border border-black p-2 m-2">
            <Heart />
          </div>
          <div className="border border-black p-2 m-2 text-2xl">
            <MdSaveAlt />
          </div>
        </div>
        <button className="p-3 bg-red-400 m-3 font-semibold w-full">
          Buy Now
        </button>
        <div>
          <div className="text-2xl">Item Description</div>
          <div className="p-4">
            {info.description || 'No description available.'}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="text-2xl w-full flex items-start pb-2">
            Item Details
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Category :</div>
            <div>{info.category || 'Unknown'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Brand :</div>
            <div>{info.brand || 'Unknown'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Size :</div>
            <div>{info.size || 'Unknown'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Deals :</div>
            <div>{info.deals || 'No deals available'}</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/5">Color :</div>
            <div>{info.color || 'Unknown'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
