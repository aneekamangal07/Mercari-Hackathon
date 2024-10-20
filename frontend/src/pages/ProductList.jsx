import React from 'react';
import ProductCard from './ProductCard';
const data = [
  {
    id: '1',
    name: 'Hemline',
    description: 'High Class Affair Maternity Oversized Tunic Dress',
    category: 'Maternity Wear',
    brand: 'The Mom Store',
    size: 'Medium',
    color: 'Lavender',
    deals: '20% off',
    price: 25.99,
    availability: 'In Stock',
    stock_quantity: 10,
    image_url:
      'https://themomstore.in/cdn/shop/files/high-class-affair-maternity-oversized-tunic-dress-398240.jpg?v=1714262290',
    created_at: '2024-13-19T12:00:00Z',
  },
  {
    id: '2',
    name: 'Hemline',
    description: 'Day In Tokyo Maternity and Nursing OverSized Shirt Dress',
    category: 'Maternity Wear',
    brand: 'The Mom Store',
    size: 'Medium',
    color: 'Multi',
    deals: '20% off',
    price: 30.99,
    availability: 'In Stock',
    stock_quantity: 15,
    image_url:
      'https://themomstore.in/cdn/shop/files/day-in-tokyo-maternity-and-nursing-oversized-shirt-dress-271380.jpg?v=1714212794',
    created_at: '2024-15-19T12:00:00Z',
  },
  {
    id: '3',
    name: 'MAMA Button-front dress',
    description:
      'Calf-length, short-sleeved dress in a viscose crêpe weave with a V-shaped neckline and buttons down the front. Narrow elastication at the back of the waist',
    category: 'Maternity Wear',
    brand: 'H&M',
    size: 'Medium',
    color: 'White/Blue floral',
    deals: '20% off',
    price: 35.99,
    availability: 'In Stock',
    stock_quantity: 6,
    image_url:
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9b%2F06%2F9b06769736d39831162d4ee0af21bba36e875a84.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]',
    created_at: '2024-14-19T12:00:00Z',
  },
  {
    id: '4',
    name: 'ZELENA Maternity Dresses for Women',
    description:
      'Calf-length, short-sleeved dress in a viscose crêpe weave with a V-shaped neckline and buttons down the front. Narrow elastication at the back of the waist',
    category: 'Maternity Wear',
    brand: 'Zelena',
    size: 'Medium',
    color: 'Blue Floral ',
    deals: '25% off',
    price: 32.99,
    availability: 'In Stock',
    stock_quantity: 3,
    image_url: 'https://m.media-amazon.com/images/I/71g0nqNFxHL._SX679_.jpg',
    created_at: '2024-11-19T12:00:00Z',
  },
];
const ProductList = () => {
  return (
    <div className="flex">
      {data.map((item) => (
        <ProductCard
          data={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
