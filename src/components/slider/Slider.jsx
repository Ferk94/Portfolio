import React from 'react';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
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
        plugins={[
          'arrows',
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            }
          },
          'centered'
        ]}
        breakpoints={{
          640: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 1
               }
             },
           ]
          },
          900: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 2
               }
             },
           ]
          }
        }}
        slidesPerPage={3}
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        slides={Slides}
      />
    </div>
  )
}

export default Slider
