import React from 'react';
import logo from '../assets/AutoWisdom Logo.avif';
import search from '../assets/search.png'
import navBg from '../assets/navBg.jpg'
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
 
const Navbar = () => {
  return (
    <div >
        <nav className=' flex justify-between max-w-6xl mx-auto items-center h-28'>
            <NavLink to='/'><img src={logo} alt='Logo' width={90}></img></NavLink>
            <div className='flex font-medium space-x-6  '>
                <form className='hidden md:flex'>
                    <input type="text" placeholder="Search Your Ride" className='mix-blend-multiply p-1 pr-5 rounded-md pl-2 outline-none w-72 border-b-2 border-slate-400' required/>
                    <button><img src={search} width={25} /></button>
                </form>
                <div className='hidden md:flex gap-6'>
                  <Link to='/'><p className='text-white  cursor-pointer hover:text-black hover:border-b-2 border-black transition duration-300 ease-in '>Home</p> </Link>
                  <p className='text-white cursor-pointer hover:text-black hover:border-b-2 border-black transition duration-300  ease-in'>Blog</p>
                  <p className='text-white cursor-pointer hover:text-black hover:border-b-2 border-black transition duration-300  ease-in'>Consult Us</p>
                  <p className='text-white cursor-pointer hover:text-black hover:border-b-2 border-black transition duration-300  ease-in'>About Us</p>
                </div>
                
                {/* hamburger */}
                <div className='md:hidden text-2xl pr-5 text-white'>
                  <GiHamburgerMenu />
                </div>
            </div>
        </nav>
          <img src={navBg} className='absolute top-0 -z-30 w-full h-28 object-cover'></img>
          <div className="absolute top-0 left-0 w-full h-28 bg-black opacity-50 -z-30"></div>
          
    </div>
  )
}

export default Navbar