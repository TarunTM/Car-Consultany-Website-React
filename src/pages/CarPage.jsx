import React from 'react'
import Navbar from '../components/Navbar'
import CarDetail from '../components/CarDetail'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const CarPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Navbar/>
      <CarDetail/>
      <Footer/>
    </div>
  )
}

export default CarPage