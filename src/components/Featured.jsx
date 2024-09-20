import React from 'react'
import featureddata from '../featureddata'
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className='max-w-6xl mx-auto mt-[39rem] mb-10'>
      <p className='font-normarl text-3xl '>Featured Cars</p>
      {
        featureddata.map((data) => (
          <div key={data.id} className='flex-nowrap md:flex gap-5 pt-4 '>
            <img src={data.image[0]} width={400} alt={data.name} className=' mix-blend-multiply ' />

            <div className='pt-4'>
              <p className='font-bold text-3xl'>{data.name}</p>
              <p className='pt-2 font-medium'>{data.description}</p>
              <p className='pt-2 font-bold text-xl'>{data.price}</p>
              <Link to={`/Car/${data.id}`}>
              <button className='mt-2 border-blue-600 border-2 rounded-full px-3 text-md text-blue-600 hover:text-blue-400 hover:border-blue-400 flex justify-center items-center space-x-2'>
                <span>more info</span>
                <IoArrowForward className='text-center'/>
              </button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Featured
