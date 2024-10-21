import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  
  const toggleCart = () => {
    setActiveCart(!activeCart);
  };

  return (
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 transform transition-transform duration-300 
    ${activeCart ? "translate-x-0" : "translate-x-full"}`}>
      <div className='flex justify-between items-center my-3'>
        <span className='text-xl font-bold text-gray-800'>My Order</span>
        <FaWindowClose 
          onClick={toggleCart} 
          className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300' 
        />
      </div>
      {cartItems.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
      <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800'>Items: {cartItems.length}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amount: {/* Calculate total here */}</h3>
        <hr className='w-[90vw] lg:w-[18vw] my-2' />
        <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
