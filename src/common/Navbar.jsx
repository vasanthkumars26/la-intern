import React, { useState } from "react";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlinePerson,
  MdSearch,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-auto shadow-sm sticky top-0 z-50 bg-[#0053E2]">
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
      
        <p className="text-[#0053E2] font-bold text-2xl"></p>
        <div className="hidden md:flex relative w-1/2">
          <input
            type="text"
            placeholder="Search everything on Webby"
            className="w-full h-[45px] rounded-full px-4 pr-12 outline-none"
          />
          <MdSearch className="absolute right-3 bg-[#002E99] text-white p-2 rounded-full text-3xl top-1/2 -translate-y-1/2 cursor-pointer" />
        </div>

        
        <div className="hidden md:flex items-center gap-10 text-white">
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
        </div>

      
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      
      <div className="md:hidden px-4 mb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search everything on Webby"
            className="w-full h-[42px] rounded-full px-4 pr-10 outline-none"
          />
          <MdSearch className="absolute right-3 text-white bg-[#002E99] p-2 rounded-full text-2xl top-1/2 -translate-y-1/2 cursor-pointer" />
        </div>
      </div>


      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-3 bg-[#003bb5] text-white text-sm">
          <p className="cursor-pointer">Favorites</p>
          <p className="cursor-pointer">Cart</p>
          <p className="cursor-pointer">Sign In</p>
        </div>
      )}

      
      <div className="flex gap-6 justify-center items-center bg-[#C9DCFD] py-3 text-sm flex-wrap font-medium">
        <select className="bg-white rounded-full px-4 py-1 cursor-pointer outline-none">
          <option>Websites</option>
        </select>

        <select className="bg-white rounded-full px-4 py-1 cursor-pointer outline-none">
          <option>Products</option>
        </select>

        <p className="bg-white rounded-full px-4 py-1 cursor-pointer">
          For Sellers
        </p>

        <p className="bg-white rounded-full px-4 py-1 cursor-pointer">
          Insight
        </p>
      </div>
    </div>
  );
};

export default Navbar;
