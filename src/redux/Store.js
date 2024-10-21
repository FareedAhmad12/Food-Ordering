
import {  configureStore } from '@reduxjs/toolkit';
import CartSlice from './Slices/CartSlice';
//import  CartSlice from "./Slices/CartSlice";
const Store=configureStore({
reducer:{
    cart:CartSlice,
}
})
//const store=createStore(Store)
export default Store; 