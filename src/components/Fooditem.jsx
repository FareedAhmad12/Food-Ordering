import React from 'react';
import FoodCard from './FoodCard';
import FoodData from '../Data/FoodData.js';

const Fooditem = () => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start gap-10 mx-6 my-10'>
      {FoodData.map((food) => {
        return (
          <FoodCard 
            key={food.id} 
            name={food.name}
            id={food.id}
            img={food.img}
            price={food.price} // Keep this line
            desc={food.desc}
            category={food.category}
            rating={food.rating}
          />  
        );
      })}
    </div>
  );
};

export default Fooditem;
