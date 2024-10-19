// types/ProductsMaster.js

export const ProductsMaster = {
  keyword: String,
  category: {
    id: Number,
    name: String,
  },
  products: [
    {
      code: String,
      name: String,
      price: Number,
      imageUrl: String,
    },
  ],
};
