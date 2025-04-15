import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Components/Pages/Shop/Shop'
import ShopCategory from './Components/Pages/ShopCategory/ShopCategory'
import Product from './Components/Pages/Product/Product'
import Cart from './Components/Pages/Cart/Cart'
import LoginSignUp from './Components/Pages/LoginSignUp/LoginSignUp'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_men.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

const App = () => {
  return (    
    <>  
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/productId' element={<Product />} />  
      <Route path='/Cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignUp  />} />
    </Routes>
    <Footer />
    </BrowserRouter> 
    </>
  )
}

export default App          