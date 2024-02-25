import React, { useEffect, useState } from 'react';

import './styles.scss';

// COMPONENTES
import Header from '../../components/header/index';

const Index = () => {
  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      // Agregamos un listener para el evento de orientación
      window.addEventListener('deviceorientation', handleOrientation);
    } else {
      console.log('El dispositivo no soporta la API de DeviceOrientation.');
    }

    function handleOrientation(event) {
      let beta = event.beta; 
      // if (beta > 90) {
      //   alert('¡Giraste el celular hacia abajo!');
      // }

      beta = Math.floor(beta); 

      setRote(beta)
    }
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []); 

  const [rote, setRote] = useState(null);

  return (
    <>
      <div className="dashboard">
        <Header />
        <div className="dashboard_content_photo">
          <div className="dashboard_content_photo_box">
            {/* <img src={ImageninicioPerfil} alt="" /> */}
          </div>
        </div>

        <div className="dashboard_content_text">
          <label htmlFor="">Andres Rodriguez</label>
          <br />
          <span>Desarrollador full stack</span>
          <span>{rote}</span>
        </div>
      </div>
    </>
  );
};

export default Index;
