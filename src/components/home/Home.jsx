import React, { useState, useEffect } from 'react';
import Cover from '../cover/Cover';
import About from '../about/About';
import Slider from '../slider/Slider';
import NavBar from '../../layouts/NavBar';

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
    <div>
      <NavBar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <Slider/>
    </div>
  )
}

export default Home