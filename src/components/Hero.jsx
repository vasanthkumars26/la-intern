import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { images } from "../common/Categories";
import { trendingprod } from "../common/Trendingproducts";

const Hero = () => {
  return (
    <div>
     
      <div className="bg-[#002E99] rounded-3xl p-6 md:p-10 m-4 overflow-hidden">
  <div className="flex flex-row justify-between items-center gap-6 w-full">

    <div className="w-[48%] min-w-[160px] md:w-[50%] space-y-3 md:space-y-6">
      <p className="w-full md:w-[90%] mt-3 md:mt-5 text-start text-sm sm:text-base md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-snug">
        "Beauty That Speaks
      </p>

      <p className="text-start text-sm sm:text-base md:text-lg lg:text-4xl xl:text-5xl font-semibold text-white">
        Confidence"
      </p>

      <p className="text-white text-start mt-3 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        Step into new-season styles made for confidence and comfort.
        Elevate your wardrobe with modern design.
      </p>

      <div>
        <button
          className="w-[55%] sm:w-[50%] md:w-[40%] bg-[#0053E2] shadow-md text-white mt-4 md:mt-6 rounded-full px-4 py-2 text-xs sm:text-sm md:text-sm lg:text-base"
          type="button"
        >
          View More
        </button>
      </div>
    </div>
    <div className="flex-shrink flex justify-center md:justify-end w-[50%] md:w-[48%] lg:w-[50%]">
      <div className="w-full max-w-[520px] sm:max-w-[420px] md:max-w-[450px] lg:max-w-[511px]">
        <div className="w-full h-[160px] sm:h-[200px] md:h-[280px] lg:h-[360px] overflow-hidden rounded-md">
          <img
            src="src/images/hero.png"
            alt="Hero"
            className="w-full h-full object-contain block"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </div>
</div>


      
      <div>
        <p className="text-start ml-7 mt-10 text-2xl font-semibold">
          Shop By Category
        </p>

        <div className="grid grid-cols-3 gap-2 md:grid-cols-5 m-3">
          {images.map((imgg, idx) => (
            <div key={idx} className="text-center">
              
              <div className="w-full max-w-[257px] mx-auto aspect-square overflow-hidden rounded-xl">
                <img
                  src={imgg.img1}
                  alt={imgg.title || `category-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold mt-2">{imgg.title}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center w-full mt-10 gap-6 px-0 md:px-4">

  <div className="w-full md:w-[32%] md:mt-8 lg:w-[30%] mb-5 h-full">
    <img 
      src="src/images/parachute.png" 
      alt="Hairol" 
      className="w-full md:h-[400px] lg:h-[450px] object-cover rounded-xl"
    />
  </div>

  <div className="flex-1 m-3">

    <div className="flex items-center justify-between md:mb-12 lg:mt-10">
      <div>
        <p className="text-xl lg:text-2xl font-bold">Trending products</p>
        <p className="text-gray-500 text-sm">Berry hues for everyone.</p>
      </div>
      <p className="text-gray-600 cursor-pointer text-sm md:text-base hover:underline">
        View more
      </p>
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-20 md:mb-5 mt-4">

      {trendingprod.map((imgg, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-2xl shadow-md md:w-[170%] lg:w-[100%] p-4 relative flex flex-col justify-between "
        >

          <div className="relative w-full  h-[180px] md:h-[200px] rounded-xl overflow-hidden">
            <img 
              src={imgg.img1} 
              alt={imgg.desc} 
              className="w-full h-full object-contain "
            />
            <div className="absolute top-2 right-0 text-xl cursor-pointer">
              <MdFavoriteBorder />
            </div>
          </div>

          <p className="mt-3 font-semibold text-lg">{imgg.amt}</p>
          <p className="text-[#0053E2] font-semibold text-sm truncate">
            {imgg.desc}
          </p>
          <p className="text-sm font-medium text-gray-600">{imgg.rating}</p>

          <button className="mt-3 md:mt-2 w-fit flex bg-[#0053E2] text-white py-1 px-4 rounded-full text-sm hover:bg-blue-700">
            {imgg.button}
          </button>

        </div>
      ))}

    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
