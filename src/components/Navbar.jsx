import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 mb-10'>
      <div>
        <h3 className='text-xl font-bold text-gray-600 py-3'>{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className='text-2xl font-bold '>Food Delivery</h1>
      </div>
      <div>
        <input type="search" placeholder="Search here" autoComplete="off" 
        className='  p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[]'/>
      </div>
    </nav>
  );
};

export default Navbar;  
