import React from 'react'
import slides from '../mockslides';
import './HeroSection.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ConsultBtn from './ConsultBtn';

const HeroSection = () => {
  return (
    <div>
        <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper absolute top-0 -z-10"
                >
                {
                    slides.map( (slide) => (
                        <SwiperSlide key={slide.id}>
                            <img src={slide.image} alt={slide.title}></img>
                        </SwiperSlide>
                    ))
                }
                
                
        </Swiper>
        <div className='flex flex-col justify-center items-center pt-20 text-center'>
            <p className='text-white font-bold text-5xl'>Find Your Perfect Ride</p>
            <p className='text-black font-medium text-xl pt-1'>Your Trusted Partner in Car Buying Decision</p>
            {/* <button className='consult-btn rounded-md mt-4'>Consult Us</button> */}
            <ConsultBtn/>
        </div>
    </div>
  )
}

export default HeroSection