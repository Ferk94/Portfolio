import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css'

const slidesInfo = [
    {
        src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
        alt: 'qbook',
        desc: 'qbook'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
        alt: 'techo',
        desc: 'techo'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
        alt: 'foodApp',
        desc: 'foodApp'
    },
]

const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <Link to={`/${slide.desc}`}>
            <img src={slide.src} alt={slide.alt}/>
        </Link>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))


export default slides;
