import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ProductCard = (item) => {
  const details = item.data;
  const navigate = useNavigate();
  return (
    <div
      className="group flex h-full flex-col gap-2"
      onClick={() => navigate(`/item/${details.id}`)}
    >
      <div className="relative">
        <img
          src={details.image_url}
          className="block aspect-square rounded-sm object-cover group-hover:opacity-60 w-80 h-80"
        />
        <div className="absolute bottom-2 left-0 rounded-r-full bg-[#0006] px-2 py-1 lg:bottom-2">
          <p className="text-sm font-bold text-white sm:text-lg">
            &yen;{details.price}
          </p>
        </div>
        <button
          type="button"
          className="invisible absolute bottom-2 right-2 flex items-center justify-center rounded-full bg-white p-2 lg:group-hover:visible"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Heart className="size-[20px] stroke-2" />
        </button>
      </div>
      <span className="hidden text-sm lg:line-clamp-2 font-black">
        {details.name}
      </span>
    </div>
  );
};

export default ProductCard;
