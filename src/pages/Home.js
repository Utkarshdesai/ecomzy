
import React, { useEffect, useState } from 'react'
import {ProductCard } from '../components/ProductCard'
import { Loader } from '../components/Loader'

export const Home = () => {

     const [getdata ,setdata] = useState([]) 
     const [loading ,setloading] = useState(false)

     //api call and store data to variable
     const fetchapidata = async () => {
            try {
                
                setloading(true)
                const data = await fetch('https://fakestoreapi.com/products')
                const res = await data.json()
                setdata(res)      

            } catch (error) {
                console.log(error)
                setdata([])
            }

            setloading(false)  
     }

    useEffect(()=>{
          fetchapidata()
    },[])

  return (
    <div>
         
      {  
       loading ? 
         <Loader></Loader>
       : (getdata.length > 0)  ?  

        ( <div className='grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
           {
            getdata.map( (item )=>  <ProductCard item = {item} key={item.id}  ></ProductCard> ) 
           }
          </div>
        )
            :  ( 
                 <div className='flex justify-center items-center'> 
                          <p > No data found </p>
                         </div>
              )
        
      }
        
     </div>
  )
}
