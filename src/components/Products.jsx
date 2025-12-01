import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

const Products = () => {
    const topprod = [
        {
            img1:"src/images/image 132.png",
            amt:"Rs.1000",
            desc:"Schwarzkopf Keratin Color Permanent Hair Color, 1.8 Ruby Noir, 1 Application",
            rating:"⭐⭐⭐⭐",
        },
        {
            img1:"src/images/image 133.png",
            amt:"Rs.1000",
            desc:"essence Juicy Bomb Shiny Lipgloss 104 Poppin' Pomegranate",
            rating:"⭐⭐⭐⭐",
        },
        {
            img1:"src/images/image 131.png",
            amt:"Rs.1000",
            desc:"Wet n Wild Perfect Pout Lip Liner Stain Spilled Wine",
            rating:"⭐⭐⭐⭐",
        },
        {
            img1:"src/images/image 134.png",
            amt:"Rs.1000",
            desc:"essence Hydra Kiss Lip Oil 05 Midnight Mystery",
            rating:"⭐⭐⭐⭐",
        },
    ]

    const techproducts = [
        {
            img1:"src/images/image 138.png",
            desc:"Lakme",
        },
        {
            img1:"src/images/image 139.png",
            desc:"Lotus",
        },
        {
            img1:"src/images/image 140.png",
            desc:"Forest"
        },
        {
            img1:"src/images/image 141.png",
            desc:"Boutique"
        },
        {
            img1:"src/images/image 142.png",
            desc:"Himalaya"
        },
        {
            img1:"src/images/image 144.png",
            desc:"Mama earth"
        },
        {
            img1:"src/images/image 145.png",
            desc:"Indulekha"
        },
        
    ]
  return (
    <div>
        <div className='mt-2 ml-3 mr-3'>
                    <p className='text-2xl font-semibold text-start'>Trending Products</p>
                    <div className='flex items-center justify-between mt-2'>
                      <p className='text-gray-500  text-start'>Berry hues for everyone</p>
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

                <div className='ml-4 m-4'>
                    <p className='text-2xl font-semibold text-start'>Brands</p>
                    <div className='flex items-center justify-between'>
                      <p className='text-gray-500  text-start'>Tech brands you may love</p>
                    <p className='text-gray-500 cursor-pointer'>View less</p> </div>
                    <div className='grid grid-cols-5 text-start '>
                        {techproducts.map((item,idx)=>(
                           <div> <img src={item.img1} alt='banner' className='h-[100px] m-3 mt-5' />
                            <p className='mt-2 font-semibold text-blue-600 ml-4'>{item.desc}</p></div>
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default Products