import React, { useRef, useLayoutEffect, useState } from "react";
import ReactPlayer from 'react-player';
import ProjectsNavBar from './projectsNavBar/ProjectsNavBar';
import './Qbook.css';

const Qbook = () => {

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
    <div ref={targetRef} className='project-container'>
      <div className='text-container'>
      <h1>VoltVisual Gallery</h1>
       <h2>Breve resumen</h2>
       <h4>Proyecto realizado para cliente particular. Usuario administrador que cuenta con diferentes paneles
       donde se registran empresas, coordinadores, excursiones y por último fotos, todas asociadas pertinentemente.
       También hay un panel de usuarios, donde puede aceptar o rechazar dichos usuarios q se hayan registrado en la página.
       Cuenta con filtros pertinetnes para el fácil acceso de los mismos.
       Lado de usuario regular donde accedes a todas las fotos de cada excursion de acuerdo al coordinador q le corresponde.
       descarga particular, en formato zip por excursión y en formato zip todas las fotos.
       Registro e inicio de sésión controladas.
       </h4>
       <br/>
       <h2>Tecnologías utilizadas</h2>
       <h3>Backend</h3>
       <p>Se ejecuta en expressJs y se conecta a través de la ORM Sequelize a PosgreSQL. Se utilizada
        módulos nativos de nodeJs como fs y path para la correcta lectura y manejo de carpetas y archivos.
        Se utilizo jwt(json-web-token) para generar token de seguridad de acceso a los usuarios.
        Se utilizaron módulos como Multer para leer correctamente la Form-Data q viene del front (fotos).
        Se utilizó el módulo de Amazon S3 para subir las fotos hacia sus buckets y desps consumirlos.
        También se utilizó nodemailer y se puso en práctica el servicio de sendGrid para enviarles correo
         a los nuevos usuarios.
       </p>
       <h3>FrontEnd</h3>
       <p>Montado en ReactJs y posteriormente buildeado puesto en producción. se utilizan todos los hooks
        nativos de React para el correcto funcionamiento y la agilización de tareas. Se utiliza Redux como estado global
        del 80% de las peticiones hacia la api de la web. se utiliza módulos como redux-persistor para no perder cierta
        info q necesitamos como el token.
        se utilizó bootstrap, reactstrap, Material-ui y Formik así como css puro para los estilos.
       </p>
      </div>
       <div className='video-container'>
        <ReactPlayer width={`${dimensions.width < 900 ? "300px" : "650px"}`} height={`${dimensions.width < 900 ? "166px" : "360px"}` } url='https://youtu.be/9b3nJn8gZAc'/>
       <a href='http://qbook.digital' target='_blank'>Link a la web de VoltVisual Gallery</a>
       </div>
    </div>
    </div> 
  )
}

export default Qbook