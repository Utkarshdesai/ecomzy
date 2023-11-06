import React from 'react'
import { MdDelete } from 'react-icons/md';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {remove } from '../Redux/Slice/Cartslice'
import { toast } from 'react-toastify';

export const CartItem = ({card}) => {

  const dispatch = useDispatch()


  const removeitem = () => {
    
    toast.error("item removed from cart")
    
     dispatch(remove(card.id))
  }
  
  const productsincart = useSelector((state)=> state.allcart.cart) 



  return (
    <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 '>
    <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
      <div className='w-[30%]'>
          <img className=' object-cover' src={card.image}/>
        </div>
        <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
          <h1 className='text-xl text-slate-700 font-semibold'>
            {card.title}
          </h1>
          <p className='text-base text-slate-700 font-medium'>
            {card.description.split(" ").slice(0,20).join(" ") + "..."}
          </p>
          <div className='flex items-center justify-between'>
            <p className='font-bold text-lg text-green-600'>${card.price}</p>
            <button className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 
            cursor-pointer rounded-full p-3 mr-3' onClick={removeitem}><MdDelete className='text-red-800 group-hover:text-white'/></button>
          </div>
        </div>
    </div>
  </div>
  )
}
