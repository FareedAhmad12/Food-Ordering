import React from 'react'

const CatagoryMenu = () => {
  return (
    <div className='ml-6'>
      <h3 className='text-xl font-semibold'>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden' > 
        <button className=' py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
        all</button>
        <button className=' py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
        lunch</button>
        <button className=' py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
        breakfast</button>
        <button className=' py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
        dinner</button>
        <button className=' py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
        Snack</button>
      </div>
    </div>
  )
}

export default CatagoryMenu
