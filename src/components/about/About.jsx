import React from 'react';
import aboutImg from '../../media/aboutImg.png';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Desarrollador FullStack</h3>
        <div className='about-text'>
          Me dedico al desarrollo web hace 2 años, con buenos conocimientos tanto de backend como de frontend. Aceleré mi proceso de aprendizaje en la academia de <a href='https://www.soyhenry.com/' target='_blank'>Soy Henry</a>.
          Soy una persona didáctica, comunicativa y responsable que busca alcanzar sus metas ofreciendo su compromiso, lealtad y conociminetotos.
          Busco mi primer empleo en el mundo IT, si bien tengo trabajos realizados Full-Stack de manera Free Lance que a continuación podrán observar. 
        </div>
      </div>
      <div className='about-img'>
            <img src={aboutImg} alt="img not found" />
      </div>
    </div>
  )
}

export default About
