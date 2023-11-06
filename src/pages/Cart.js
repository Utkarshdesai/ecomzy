import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {
 const [totalamount,settotalamount] = useState(0)

   const products = useSelector((state)=> state.allcart.cart)
   
     //calculate total amount of allcart using array.reduce
       const price = products.reduce( (acc ,item) => {
         return acc + item.price
        } , 0) 
 

        const totalprice = price.toFixed(0)

       useEffect( ()=> {
          settotalamount(totalprice)
       }, [products])
       

  return (
    <div> 
 
      { //check cart legth if empty show shop more button and link to home page otherwise map through all cartitems
        products.length > 0 ? 
        ( <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>

             <div className="w-[100%] md:w-[60%] flex flex-col p-2"> 
               {
                   (products.map( (card)=> <CartItem card={card} key={card.id}> </CartItem>) ) 
               }
             </div>

              <div  className='"w-[100%] md:w-[40%] mt-5 flex flex-col p-5 gap-5 my-14 h-[100%] justify-between'>
                    <div> 
                      <p className="font-semibold text-xl text-green-800 ">  Your CART  </p> 
                    </div>

                    <div className='mb-2'>
                      <h1 className="font-semibold text-5xl text-green-700 -mt-5"> SUMMARY </h1>
                    </div>

                    <div className='mb-7'>
                       <p className='text-2xl'> {`Total items : ${products.length}`}  </p> 
                    </div>

                    <div>
                     <p className="text-xl font-bold" >  <span className="text-gray-700 font-semibold"> Total amount : </span>{` $${totalamount}`} </p> 
                    </div>

                 </div>

            

        </div>) 
        
    : 
         (<div className='min-h-[80vh] flex flex-col items-center justify-center'> 
           
           <div > 
            <p className='text-gray-700 font-semibold text-xl mb-2'> No cart Found </p> 
            
            </div> 

              <Link to='/' >
              <button className='bg-green-600 uppercase hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider"' > Shop more </button>
              </Link>

         </div>)
      }
    
 </div>
  )
}
