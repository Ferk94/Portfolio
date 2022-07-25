import React, { useRef, useLayoutEffect, useState } from "react";
import ReactPlayer from 'react-player';
import ProjectsNavBar from './projectsNavBar/ProjectsNavBar';
import './FoodApp.css';

const FoodApp = () => {

    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });



    useLayoutEffect(() => {
        if (targetRef.current) {
          setDimensions({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight
          });
        }
      }, []);




  return (
    <div>
      <ProjectsNavBar/>
        <div className='project-container'>
        <h1>Food App</h1>
       <h2>Breve resumen</h2>
       <div className='text'>Proyecto realizado individualmente en <a href={'https://www.soyhenry.com/'} target="_blank" rel="noreferrer">Soy Henry</a>.
        Es un recetario que  consume la api de  <a href={'https://spoonacular.com/food-api'} target='_blank' rel='noreferrer'>spoonacular</a>.
        Podes filtrar y buscar la receta q más te guste y acceder a todos sus detalles.
        También podes guardar recetas propias en la página y acceder a la misma cuando gustes.
       </div>
       <br/>
       <h2>Tecnologías utilizadas</h2>
       <h3>Backend</h3>
       <div className='text'>Se ejecuta en expressJs y se conecta a través de la ORM Sequelize a PosgreSQL.
       Rutas GET, POST y DELETE. Ruteo con sus respectivos controladores, súper escalable. 
        Se consume la api de <a href={'https://spoonacular.com/food-api'} target='_blank' rel='noreferrer'>spoonacular</a>,
         se mezcla con lo q viene de la base de datos y se da como respuesta al front.
       </div>
       <h3>FrontEnd</h3>
       <div className='text'>Montado en ReactJs y posteriormente buildeado puesto en producción. se utilizan todos los hooks
        nativos de React para el correcto funcionamiento y la agilización de tareas. Se utiliza Redux como estado global
        del 80% de las peticiones hacia la api de la web. 
        se utilizó css puro para los estilos.
       </div>
       <br/>
       <a href='http://notFound' target='_blank'>Link en desarrollo</a>
       <div className='video-container'>
        {/* <ReactPlayer width={`${dimensions.width < 900 ? "300px" : "650px"}`} height={`${dimensions.width < 900 ? "166px" : "360px"}` } url='https://youtu.be/9b3nJn8gZAc'/> */}
        <div className='text'>Video en desarrollo</div>
       </div>
        </div>
    </div>
  )
}

export default FoodApp;