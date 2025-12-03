import React, { useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { techproducts } from '../common/Brands'
import { topprod } from '../common/Highlyrated'



const Products = ({open,setOpen}) => {
  return (
    <div>
        <div className='mt-2 ml-3 mr-3'>
                    <p className='text-2xl font-semibold text-start'>Highly rated</p>
                    <div className='flex items-center justify-between mt-2'>
                      <p className='text-gray-500  text-start'>Based on star rating and number of customer ratings</p>
                    <p className='text-gray-500 cursor-pointer'>View more</p> </div>
                    <div className='grid md:grid-cols-2 m-3 '> 
                    {topprod.map((imgg,idx)=>(
                       <div className='text-start bg-white shadow-xl m-5 p-4 rounded-3xl mt-5 relative'  key={idx}> <img  src={imgg.img1} className='mx-auto h-[257px] w-[257px] mt-3' />
                        <p className='font-semibold'>{imgg.amt}</p>
                        <p className='text-[#0053E2] font-semibold'>{imgg.desc}</p>
                        <p className='font-semibold'>{imgg.rating}</p>
                        <div className='absolute top-3 right-3 hover:cursor-pointer'>
                            <MdFavoriteBorder />
                        </div>
                        </div>
                    ))}
                </div>
                </div>

                <div className='ml-12 m-6 mt-12'>
                    <p className='text-2xl font-semibold text-start'>Brands</p>
                    <div className='flex items-center justify-between'>
                      <p className='text-gray-500  text-start'>Tech brands you may love</p>
                    <p onClick={()=>setOpen(!open)} className='text-gray-500 cursor-pointer'>{ open ? "View less":"View more"}</p> </div>
                     <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5  text-start '>
                      { (open ? techproducts: techproducts.slice(0,5)).map((item,idx)=>(
                           <div className='w-full overflow-hidden aspect-square mt-6'> <img src={item.img1} alt='banner' className='h-[100px] ' />
                            <p className='mt-2 font-bold  text-blue-600 ml-4'>{item.desc}</p></div>
                        ))} 
                    </div>
                </div>
    </div>
  )
}

export default Products