import React, { useState } from 'react'
import Navbar from './common/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './common/Footer'

const Home = () => {
    const [open,setOpen]= useState(false)
    return (
        <>
            <Navbar/>
            <Hero/>
            <Products open={open} setOpen={setOpen} />
            <Footer/>
        </>
    )
}

export default Home