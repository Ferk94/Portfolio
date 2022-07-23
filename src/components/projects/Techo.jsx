import React, { useRef, useLayoutEffect, useState } from "react";
import ReactPlayer from 'react-player';
import ProjectsNavBar from './projectsNavBar/ProjectsNavBar';
import './Techo.css';

const Techo = () => {


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
        <h1>Techo Hiring</h1>
       <h2>Breve resumen</h2>
       <h4>Proyecto realizado grupalmente en Henry con el cuál me gradué. El desafío fue continuar un Proyecto
        con código heredado hecho 100% con TypeScript tanto en el back como en el front para la ONG TECHO.
        Yo particularmente realicé rutas del backend, asociaciones, generar servicio de correos, componentes de React,
        enviar información del backend hacia el front y consumirlas correctamente.
       Por último, me tocó arreglar bugs generales tanto de back como de front.
       Por el momento, no se encuentra en producción.
       </h4>
       <br/>
       <h2>Tecnologías utilizadas</h2>
       <h3>Backend</h3>
       <p>Se ejecuta en expressJs y se conecta a través de la ORM Sequelize a PosgreSQL. Fueron utilizados
        módulos nativos de nodeJs como fs y path para la correcta lectura y manejo de carpetas y archivos.
        Se utilizo jwt(json-web-token) para generar token de seguridad de acceso a los usuarios.
        También se utilizó nodemailer y se puso en práctica el servicio de sendGrid para enviarles correo
         a los nuevos usuarios.
       </p>
       <h3>FrontEnd</h3>
       <p>Montado en ReactJs. se utilizan todos los hooks
        nativos de React para el correcto funcionamiento y la agilización de tareas. Se utiliza Redux como estado global
        del 80% de las peticiones hacia la api de la web. se utiliza módulos como redux-persistor para no perder cierta
        info q necesitamos como el token.
        se utilizó bootstrap, reactstrap, Material-ui y Formik así como css puro para los estilos.
       </p>
       <br/>
       <a href='http://notFound' target='_blank'>Link aún no disponible</a>
       <div className='video-container'>
        <ReactPlayer width={`${dimensions.width < 900 ? "500px" : "850px"}`} height={`${dimensions.width < 900 ? "296px" : "560px"}` } url='https://youtu.be/GMjGTJrUBJo'/>
       </div>
        </div>
    </div>
  )
}

export default Techo;