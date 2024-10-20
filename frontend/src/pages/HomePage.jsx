// app-like-mercari-main/src/pages/HomePage.jsx
import React from 'react';
import { Products } from '../components';
import { earringsProductsMaster, sneakersProductsMaster } from '../data';
const HomePage = () => (
  <div className="w-full">
    <h2 className="pb-5 text-lg font-bold text-secondary-text lg:text-xl">
      閲覧した商品からのおすすめ
    </h2>
    <div className="w-[100%]">
      <Products productsMaster={earringsProductsMaster} />
    </div>
  </div>
);

export default HomePage;
