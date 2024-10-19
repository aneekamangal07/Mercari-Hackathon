import { Heart } from 'lucide-react';
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { MdSaveAlt } from 'react-icons/md';
const DescriptionPage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/2 h-screen flex items-center justify-center">
        <img src="https://m.media-amazon.com/images/I/51vC37KDe9L._AC_UY580_.jpg" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="font-semibold text-2xl flex justify-normal w-full">
          SNIDEL Pleated Docking Knit One-Piece
        </div>
        <div className="flex items-start w-full mt-4 font-medium p-3">
          ¥<span className="font-semibold text-xl">5555</span>
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
            This is a beige SNIDEL pleated docking knit one-piece dress in size
            0. It has been worn a few times and washed at home. There is no
            price tag. There is a zipper on the side, which functions properly.
            While no noticeable scratches or stains are apparent, please note
            that it has been previously owned and is a second-hand item. It will
            be folded small for shipping, so please expect some wrinkles upon
            delivery.
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="text-2xl w-full flex items-start pb-2">
            Item Details
          </div>
          <div className="flex">
            <div className="font-semibold w-1/3">Category :</div>
            <div>Clothing</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/3">Brand :</div>
            <div>Snidel</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/3">Size :</div>
            <div>M</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/3">Deals :</div>
            <div>Offers applied</div>
          </div>
          <div className="flex">
            <div className="font-semibold w-1/3">Color :</div>
            <div>White</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
