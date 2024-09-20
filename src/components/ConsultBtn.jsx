import React from 'react';
import './ConsultBtn.css';
import { Link } from 'react-router-dom';

const ConsultBtn = () => {
  return (
    <div>
        <Link to='/'><button className='consult-btn rounded-md mt-4'>Consult Us</button></Link>
    </div>
  )
}

export default ConsultBtn