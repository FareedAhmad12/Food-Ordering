import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Succes from './pages/Succes';
import Error from '../Error';
const App = () => {
  return (
<BrowserRouter>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Succes' element={<Succes/>}/>
<Route path='/*' element={<Error/>}/>   



  </Routes>
</BrowserRouter>
  );
};

export default App
