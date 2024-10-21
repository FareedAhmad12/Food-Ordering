import React from 'react'
import Navbar from '../components/Navbar'
import CatagoryMenu from '../components/CatagoryMenu'
import Fooditem from '../components/Fooditem'
import Cart from '../components/Cart'
const Home = () => {
  return (
    
      <div>
        <Navbar/>
        <CatagoryMenu/>
        <Fooditem/>
        <Cart/>
      </div>
    
  )
}

export default Home
