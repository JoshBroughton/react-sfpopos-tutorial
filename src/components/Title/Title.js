import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import './Title.css';

function Title() {
  const navigate = useNavigate();
  const location = useLocation();

  const clickHandler = (e) => {
    navigate(`${e.target.value}`)
  }

  const hamburgerHandler = () => {
    const currentPath = location.pathname;
    if (currentPath === '/menu') {
      navigate(-1)
    } else {
      navigate('/menu')
    }
  }

  return (
    <div className="Title">
      <header>
        <div className='Title-Container'>
          <button value='/signup'  onClick={clickHandler} className='Signup-Button'>Signup</button>
          <h1>SFPOPOS</h1>
          <button className='hamburger' value='/menu' onClick={hamburgerHandler}></button>
        </div>
        <p className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</p>
        <div className='Title-Navbar'>
          <Navbar />
        </div>
      </header>
    </div>
  )
}

export default Title;
