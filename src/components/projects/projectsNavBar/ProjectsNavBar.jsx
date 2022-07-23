import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsNavBar.css';

const ProjectsNavBar = () => {

    const navigate = useNavigate();

    function returnToHome(e){
      e.preventDefault();
      navigate('/');
    }


  return (
    <div className='navBar-container'>
        <button className='button-navBar' onClick={e => returnToHome(e)}>Regresar</button>
    </div>
  )
}

export default ProjectsNavBar;