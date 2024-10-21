import React from 'react';
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice.jsx'; 

const FoodCard = ({ id, name, price, desc, img, rating }) => {
  const dispatch = useDispatch();     
  
  return (
    <div className='w-[250px] font-bold bg-white p-5 flex flex-col rounded-lg ml-2'>
      <img 
        src={img} 
        alt={name} 
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' 
      />
      <div className='flex justify-between text-sm'>
        <h1>{name}</h1>
        <span className='text-green-500'>{price}</span>
      </div>
      <p>{desc.slice(0, 50)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
          <FaStar className='mr-1 text-yellow-400' /> {rating}
          <button 
            onClick={() => {
              dispatch(addToCart({ id, name, price,desc,img, rating,})); // Ensure qty is defined in addToCart
            }} 
            className='ml-20 p-1 text-white bg-green-500 rounded-lg text-sm hover:bg-green-600'
          >
            Add to cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default FoodCard;
