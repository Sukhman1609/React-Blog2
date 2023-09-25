

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/LinkCompo.css';

const LinkCompo = ({isVisible}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
       <h1><span className='header1'>THE</span><span className='header2'>SIREN</span></h1>
      <div>
    <div className="navigation-container" >
      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      <div className='nav'>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
      <li><NavLink to='/' className='element' onClick={toggleMenu} activeClassName="active-link">Home</NavLink></li><hr className='linkHr'></hr>
      <li><NavLink to='/bollywood' className='element' onClick={toggleMenu} activeClassName="active-link">Bollywood</NavLink></li><hr className='linkHr'></hr>
      <li><NavLink to='/technology' className='element' onClick={toggleMenu}>Technology</NavLink></li><hr className='linkHr'></hr>
      <li><NavLink to='/hollywood' className='element' onClick={toggleMenu}>Hollywood</NavLink></li><hr className='linkHr'></hr>
      <li><NavLink to='/fitness' className='element' onClick={toggleMenu}>Fitness</NavLink></li><hr className='linkHr'></hr>
      <li><NavLink to='/food' className='element' onClick={toggleMenu}>Food</NavLink></li><hr className='linkHr'></hr>
      </ul>
      </div>
    </div></div>
    <hr></hr>
    
   </div>
   
  );
};

export default LinkCompo;
