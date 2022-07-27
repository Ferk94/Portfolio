import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import Slides from './Slides';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.css';

const Slider = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-title'>
        <h1>Mis Proyectos</h1>
      </div>
      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        center
        offSet={50}
        itemWidth={400}
        slides={Slides}
      />
    </div>
  )
}

export default Slider
