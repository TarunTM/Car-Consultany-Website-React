import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Featured/>
        <Footer/>
    </div>
  )
}

export default Home