import React, { useEffect } from 'react';
import './styles.scss';

// COMPONENTES
import Header from '../../components/header/index';

const Index = () => {
  useEffect(() => {
    // Comprobamos si el dispositivo soporta la API de DeviceOrientation
    if (window.DeviceOrientationEvent) {
      // Agregamos un listener para el evento de orientación
      window.addEventListener('deviceorientation', handleOrientation);
    } else {
      console.log('El dispositivo no soporta la API de DeviceOrientation.');
    }

    // Función que maneja el evento de orientación
    function handleOrientation(event) {
      const beta = event.beta; // ángulo de inclinación alrededor del eje x

      // Comprobamos si el dispositivo está inclinado hacia abajo
      if (beta > 90) {
        // Mostramos una alerta indicando que el dispositivo está inclinado hacia abajo
        alert('¡Giraste el celular hacia abajo!');
        
        // Puedes realizar otras acciones aquí según tus necesidades
      }
    }

    // Limpiamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []); // El segundo argumento del useEffect es un array de dependencias, que está vacío para que se ejecute solo una vez al montar el componente

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
        </div>
      </div>
    </>
  );
};

export default Index;
