import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add ,remove } from '../Redux/Slice/Cartslice'
import { toast } from "react-hot-toast";


export const ProductCard = ({item }) => {

  //import dispatch from store
  const dispatch = useDispatch() 
  
  //get cart value from store
  const cart = useSelector( (state) => state.allcart.cart)
  

   //dispatch remove cart to store and show toast
   const removecart = ()=> {
     dispatch(remove(item.id))
     toast.error("item removed from cart")
    
   }

   //dispatch addtocart to store and show toast
  const addtocart = ()=> {
    dispatch(add(item))
    toast.success("item added to cart")
    
  }
 

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-out gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-lg hover:shadow-gray-800">
    
      <div className='h-[180px]'>  
      <img src={item.image} alt='card-image' className="h-full w-full"/>
      </div>

        <div> 
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'> {item.title}  </p> 
        </div>

      
        <div> 
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left"> {item.description.split(" ").slice(0,20).join(" ") + "..."} </p>
       </div>  

      
       <div className='flex justify-center items-center gap-12  w-full mt-5'> 
         <p className='text-green-600 font-semibold'> {`$${item.price}`} </p> 
        </div>

    
        
          {
            cart.some( (p) => p.id ==item.id ) ?
           (<button    
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-red-700
          hover:text-white transition duration-300 ease-in"
             onClick={removecart}> Remove cart </button>)  
         
          :
            (<button 
              className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in'
              onClick={addtocart}> Add to Cart </button>)
            }
       
    </div>
  )
}
