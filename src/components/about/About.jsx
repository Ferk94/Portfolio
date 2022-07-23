import React from 'react';
import aboutImg from '../../media/aboutImg.png';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Desarrollador FullStack</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores similique molestias harum, expedita quaerat aspernatur eos! Est culpa consequatur placeat ex doloremque, libero magni obcaecati ratione harum error voluptatibus dicta.
        Ipsam optio fugiat ut reiciendis consequatur officia quod numquam autem molestiae sed, laborum saepe accusantium, reprehenderit repellendus vero eos deleniti iste vel dicta nesciunt repudiandae ab et ullam. Quia, reiciendis?
        Ex aliquam repellendus ut dolorem deleniti fuga perspiciatis rem repellat totam sunt sapiente nisi a modi exercitationem quae, ratione laboriosam. Dolores, earum! Debitis beatae nostrum voluptatum sapiente, doloremque illo molestiae.
        Deserunt mollitia quo eos similique error sunt veritatis sed aut enim, illo excepturi explicabo nemo, laboriosam optio voluptatibus! Architecto ex eum odio quae aliquid obcaecati similique rem esse non minima!
        Animi dolorum obcaecati cum praesentium quam enim officiis illum repudiandae temporibus a repellendus dicta excepturi quae molestiae, alias sit aliquid, ipsam ratione facere repellat, suscipit placeat voluptates omnis deleniti. Non!
        </p>
      </div>
      <div className='about-img'>
            <img src={aboutImg} alt="img not found" />
      </div>
    </div>
  )
}

export default About
