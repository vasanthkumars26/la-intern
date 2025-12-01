import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

const Hero = () => {
    const images = [
        {
            img1: "src/images/image 119.png",
            title: "HairCare"
        },
        {
            img1: "src/images/image 120.png",
            title: "SkinCare"
        },
        {
            img1: "src/images/image 121.png",
            title: "MakeUp"
        },
        {
            img1: "src/images/image 122.png",
            title: "Hairtools"
        },
        {
            img1: "src/images/image 123.png",
            title: "Frangrances"
        },
        {
            img1: "src/images/image 124.png",
            title: "PremiumBeauty"
        },
        {
            img1: "src/images/image 125.png",
            title: "Travel Size"
        },
        {
            img1: "src/images/image 126.png",
            title: "Beauty tools"
        },
        {
            img1: "src/images/image 127.png",
            title: "SunCare"
        },
        {
            img1: "src/images/image 128.png",
            title: "The Curl Shop"
        },
    ]

    const trendingprod = [
        {
            img1: "src/images/image 129.png",
            amt: "Rs.1000",
            desc: "KISS Self Adhesive Eyelashes WICKED x imPRESS, Bewitching,",
            rating: "⭐⭐⭐⭐",
        },
        {
            img1: "src/images/image 130.png",
            amt: "Rs.1000",
            desc: "Revlon Super Lustrous Creme Lipstick, Creamy Formula, 046",
            rating: "⭐⭐⭐⭐",
        },
    ]
    return (
        <div>
            <div className='bg-[#002E99] rounded-3xl p-6 md:p-10 m-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>


                    <div className='md:w-[50%] w-full space-y-4 md:space-y-6 '>
                        <p className='w-[100%] md:w-[70%]  mt-3 md:mt-5 text-start text-xl sm:text-3xl md:text-2xl lg:text-4xl font-semibold text-white'>
                            "Beauty That Speaks
                        </p><p className='text-start text-2xl sm:text-2xl font-semibold text-white md:text-2xl lg:text-4xl'>Confidence"</p>

                        <p className='text-white text-start mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl'>
                            Step into new-season styles made for confidence and comfort.
                            Elevate your wardrobe with modern design.
                        </p>

                        <button className='w-[40%] sm:w-[40%] md:w-[40%] md:ml-60 mx-auto md:mx-0 bg-[#0053E2] shadow-md text-white mt-6 rounded-full px-4 py-2 text-sm sm:text-md'>
                            View More
                        </button>
                    </div>

                    <div className='flex justify-center md:justify-end w-full md:w-[50%]'>
                        <img
                            src="src/images/image 118.png"
                            className='w-[80%] sm:w-[350px] md:w-[450px]  mb-8 lg:w-[511px]  object-cover'
                            alt="Hero"
                        />
                    </div>

                </div>
            </div>
            <div>
                <p className='text-start ml-7 mt-10 text-2xl font-semibold'>Shop By Category</p>

                <div className='grid grid-cols-3 gap-2 md:grid-cols-5 m-3'>
                    {images.map((imgg, idx) => (
                        <div key={idx}> <img src={imgg.img1} className='h-[257px] w-[257px] mt-3' />
                            <p className='font-semibold'>{imgg.title}</p></div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-16">
                <div>
                    <img
                        src="src/images/image 146.png"
                        alt="hairoil"
                        className="w-full max-w-[567px] sm:max-w-[420px] md:max-w-[567px] h-auto md:h-[611px] object-cover rounded-xl m-3"
                    />
                </div>

                <div className="mt-2 flex-1">
                    <p className="text-2xl font-semibold text-start">Trending Products</p>

                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-start">Berry hues for everyone</p>
                        <p className="text-gray-500 cursor-pointer">View more</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-3">
                        {trendingprod.map((imgg, idx) => (
                            <div
                                className="text-start bg-slate-100 shadow-md m-1 p-4 rounded-3xl mt-5 relative"
                                key={idx}
                            >
                                <img
                                    src={imgg.img1}
                                    className="mx-auto h-[200px] sm:h-[220px] md:h-[257px] w-[200px] sm:w-[220px] md:w-[257px] mt-3 object-cover"
                                />
                                <p className="font-semibold mt-3">{imgg.amt}</p>
                                <p className="text-[#0053E2] font-semibold">{imgg.desc}</p>
                                <p className="font-semibold">{imgg.rating}</p>

                                <div className="absolute top-3 right-3 hover:cursor-pointer">
                                    <MdFavoriteBorder />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
