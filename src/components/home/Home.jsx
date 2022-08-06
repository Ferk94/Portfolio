import React, { useState, useEffect } from 'react';
import Cover from '../cover/Cover';
import About from '../about/About';
import Slider from '../slider/Slider';
import NavBar from '../../layouts/NavBar';
import './Home.css';

const Home = () => {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])


  return (
    <div className='home-container'>
      <NavBar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <div className='slider-container'>
        <Slider/>
      </div>
    </div>
  )
}

export default Home