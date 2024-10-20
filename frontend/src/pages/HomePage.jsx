// app-like-mercari-main/src/pages/HomePage.jsx
import React from 'react';
import { Products } from '../components';
import { earringsProductsMaster, sneakersProductsMaster } from '../data';
const HomePage = () => (
  <div className="w-full">
    <div className="w-[100%]">
      <Products productsMaster={earringsProductsMaster} />
    </div>
  </div>
);

export default HomePage;
