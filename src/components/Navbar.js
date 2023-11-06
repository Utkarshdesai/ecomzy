import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.png'
export const Navbar = () => {
 
  //import cartvalue from cartslice
  const cart = useSelector ( (state)=> state.allcart.cart)
  return (
      <div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl 
      mx-auto">
      <div className=" ml-5">
          <Link to="/">
              <div>
              <img src={logo} className=" h-14"/>
              </div>
          </Link>
      </div>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <Link to='/'>
            <p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in"> Home </p>
          </Link>
        

         <div className='relative'>
          <Link to="/cart">
          <AiOutlineShoppingCart className='text-2xl text-white'></AiOutlineShoppingCart>
          
          {
            cart.length > 0 &&
            <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
            justify-center items-center animate-bounce rounded-full text-white className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200'> {cart.length} </span>
          }
          
           </Link>
         </div>

         </div>  

      </nav>
    </div>
  )
}
