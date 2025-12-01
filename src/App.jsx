import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './common/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './common/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <Products/>
      <Footer/>
    </>
  )
}

export default App
