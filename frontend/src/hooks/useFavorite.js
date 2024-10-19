import { useState } from 'react';

export const useFavorite = (favorites) => {
  const [favoriteCodes, setFavoriteCodes] = useState(favorites);

  const changeFavorite = (productCode) => {
    setFavoriteCodes((prevFavoriteCodes) => {
      return prevFavoriteCodes.includes(productCode)
        ? prevFavoriteCodes.filter((code) => code !== productCode)
        : [...prevFavoriteCodes, productCode];
    });
  };

  return {
    favoriteCodes,
    changeFavorite,
  };
};
