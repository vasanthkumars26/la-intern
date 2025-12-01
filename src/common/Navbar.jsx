import React from 'react'
import { MdFavoriteBorder, MdOutlinePerson, MdOutlineShoppingCart, MdPerson, MdSearch, MdShoppingCart } from 'react-icons/md'

const Navbar = () => {
  return (
    <div>
    <div className='bg-[#0053E2] p-2 h-[73px] w-full flex items-center justify-around'>
      <p className='text-[#0053E2]'>WEBBBY</p>
      <div className='relative w-[50%]'><input 
        type="text"
        placeholder="Search everything on Webby"
        className=' outline-none w-full h-[45px] rounded-full px-3'
       /><MdSearch className='bg-[#002E99] p-1 rounded-full cursor-pointer absolute right-3 text-white top-1/2 -translate-y-1/2 text-3xl '/></div>

      <div className="flex items-center gap-12 text-white">

        <div className="flex flex-col items-center cursor-pointer">
          <MdFavoriteBorder className="text-2xl" />
          <span className="text-xs">Favorites</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <MdOutlineShoppingCart className="text-2xl" />
          <span className="text-xs">Cart</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <MdOutlinePerson className="text-2xl" />
          <span className="text-xs">Signin</span>
        </div>

      </div></div>
      <div className='flex gap-8 justify-center bg-[#C9DCFD] h-[48px]'>
        <select name="" id="" className='outline-none h-fit px-2 mt-[10px]  rounded-3xl bg-[#FFFFFF] hover:cursor-pointer'>
          <option value=""  className='outline-none'>Websites</option>
        </select>
        <select name="" id="" className='outline-none h-fit px-5 mt-[10px]  rounded-3xl bg-[#FFFFFF] hover:cursor-pointer'>
          <option value=""  className='outline-none'>Products</option>
        </select>
        <p className='h-fit px-5  mt-[10px]  rounded-3xl bg-[#FFFFFF] hover:cursor-pointer'>For Sellers</p>
        <p className='h-fit px-5  mt-[10px]  rounded-3xl bg-[#FFFFFF] hover:cursor-pointer'>Insight</p>

      </div>

    </div>
  )
}

export default Navbar
