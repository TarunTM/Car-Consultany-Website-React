import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronLeft ,FaChevronRight,FaClockRotateLeft} from "react-icons/fa6";
import { PiEngine } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineSpeed } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { GiCarSeat } from "react-icons/gi";
import { BiLike , BiDislike} from "react-icons/bi";
import featureddata from '../featureddata';
import ConsultBtn from './ConsultBtn';

const CarDetail = () => {
  const { id } = useParams(); 
  const car = featureddata.find(car => car.id === parseInt(id));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!car) {
    return <div>Car not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === car.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? car.image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='max-w-4xl mx-auto mt-10'>
      
      <div className="relative max-w-4xl mx-auto">
        <img 
          src={car.image[currentImageIndex]} 
          alt={`${car.name}`} 
          className="w-full h-[27rem] object-cover rounded-lg  "
        />
        <button 
          onClick={prevImage} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-black p-2 ">
          <FaChevronLeft size={24} />
        </button>
        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-black p-2 ">
          <FaChevronRight size={24} />
        </button>
      </div>

      <h1 className='font-bold text-4xl mt-4'>{car.name}</h1>
      <p className='mt-3 font-medium'>{car.description}</p>
      <p className='mt-2 font-bold text-xl'>{car.price}</p>

       {/* Keyfeatures */}
      <h3 className='font-bold text-2xl pt-5'>Key Features</h3>

        <div className='flex-nowrap md:flex md:space-x-12 mt-3 p-5 border-2 rounded-3xl border-slate-300 text-md'>
          <div className='md:w-[48%] flex flex-col space-y-4 pb-4'>
              <div className='flex justify-between items-center '>
                  <div className='flex justify-between items-center space-x-2'>
                    <PiEngine />
                    <p >Engine</p>
                  </div>
                  <p className='font-semibold'>{car.engine}</p>
              </div>
              <div className='flex justify-between items-center'>
                  <div className='flex justify-between items-center space-x-2'>
                    <AiOutlineThunderbolt />
                    <p>Power</p>
                  </div>
                  <p className='font-semibold'>{car.power}</p>
              </div>
              <div className='flex justify-between items-center'>
                  <div className='flex justify-between items-center space-x-2'>
                    <GiCarSeat />
                    <p>Seating Capacity</p>
                  </div>
                  <p className='font-semibold'>{car.capacity}</p>
              </div>
          </div>

          <div className='md:w-[48%] flex flex-col space-y-4'>
              <div className='flex justify-between items-center'>
                  <div className='flex justify-between items-center space-x-2'>
                    <LuFuel />
                    <p>Fuel</p>
                  </div>
                  <p className='font-semibold'>{car.fuel}</p>
              </div>
              <div className='flex justify-between items-center'>
                  <div className='flex justify-between items-center space-x-2'>
                    <MdOutlineSpeed />
                    <p>Mileage</p>
                  </div>
                  <p className='font-semibold'>{car.mileage}</p>
              </div>
              <div className='flex justify-between items-center'>
                  <div className='flex justify-between items-center space-x-2'>
                    <FaClockRotateLeft />
                    <p>Torque</p>
                  </div>
                  <p className='font-semibold'>{car.torque}</p>
              </div>
          </div>
          
        </div>

        
        {/* pros and cons */}
        <div className='flex-nowrap md:flex md:space-x-16 justify-center mt-10 mb-10'>
          <div className='md:w-[40%] p-2 rounded-xl bg-green-100  shadow-slate-300 shadow-sm mb-5'>
              <div className='flex space-x-3 items-center text-lg font-semibold pb-2'>
                <BiLike className='text-green-500'/>
                <p>Things we Like</p>
              </div>
              <ul className='list-disc pl-5 space-y-3'>
                <li><span className='pl-2'>{car.pro1}</span> </li>
                <li><span className='pl-2'>{car.pro2}</span></li>
                <li><span className='pl-2'>{car.pro3}</span></li>
              </ul>
          </div>

          <div className='md:w-[40%] p-2 rounded-xl bg-red-100  shadow-slate-300 shadow-sm'>
              <div className='flex space-x-3 items-center text-lg font-semibold pb-2'>
                <BiDislike className='text-red-500' />
                <p>Things we Like</p>
              </div>
              <ul className='list-disc pl-5 space-y-3'>
                <li><span className='pl-2'>{car.con1}</span></li>
                <li><span className='pl-2'>{car.con2}</span></li>
                <li><span className='pl-2'>{car.con3}</span></li>
              </ul>
          </div>
        </div>

        <div className='text-center mb-12'>
          <ConsultBtn/>
        </div>
        
    </div>
  );
};

export default CarDetail;
