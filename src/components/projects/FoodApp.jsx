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
       <p>Proyecto realizado individualmente en mi cursada en Henry.
        Es un recetario que  consume la api de
       <a href='https://spoonacular.com/food-api' target='_blanc'>spoonacular</a>.
        Podes filtrar y buscar la receta q más te guste y acceder a todos sus detalles.
        También podes guardar recetas propias en la página y acceder a la misma cuando gustes.
       </p>
       <br/>
       <h2>Tecnologías utilizadas</h2>
       <h3>Backend</h3>
       <p>Se ejecuta en expressJs y se conecta a través de la ORM Sequelize a PosgreSQL. 
        Se consume la api de
        <a href='https://spoonacular.com/food-api' target='_blanc'>spoonacular</a>, se mezcla con lo q viene de la base
        de datos y se da como respuesta al front.
       </p>
       <h3>FrontEnd</h3>
       <p>Montado en ReactJs y posteriormente buildeado puesto en producción. se utilizan todos los hooks
        nativos de React para el correcto funcionamiento y la agilización de tareas. Se utiliza Redux como estado global
        del 80% de las peticiones hacia la api de la web. 
        se utilizó css puro para los estilos.
       </p>
       <br/>
       <a href='http://notFound' target='_blank'>Link en desarrollo</a>
       <div className='video-container'>
        {/* <ReactPlayer width={`${dimensions.width < 900 ? "300px" : "650px"}`} height={`${dimensions.width < 900 ? "166px" : "360px"}` } url='https://youtu.be/9b3nJn8gZAc'/> */}
        <p>Video en desarrollo</p>
       </div>
        </div>
    </div>
  )
}

export default FoodApp;