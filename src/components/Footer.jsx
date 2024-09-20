import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-6xl">
        
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Auto Wisdom</h1>
          
          {/* <NavLink to='/'><img src={logo} alt='Logo' width={90}></img></NavLink> */}
        </div>

        
        <ul className="flex mb-4 md:mb-0 space-x-6 cursor-pointer">
          <li className='hover:text-gray-400'>Home</li>
          <li className='hover:text-gray-400'>About</li>
          <li className='hover:text-gray-400'>Services</li>
          <li className='hover:text-gray-400'>Contact</li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://x.com/TheAutoWisdom" className="hover:text-gray-400">
             <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/company/auto-wisdom" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/auto.wisdom" className="hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Auto Wisdom. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
