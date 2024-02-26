import React, {useState } from 'react';


import './styles.scss';

// COMPONENTES
import Header from '../../components/header/index';

const Index = () => {
  // useEffect(() => {
  //   if (window.DeviceOrientationEvent) {
  //     // Agregamos un listener para el evento de orientación
  //     window.addEventListener('deviceorientation', handleOrientation);
  //   } else {
  //     console.log('El dispositivo no soporta la API de DeviceOrientation.');
  //   }

  //   function handleOrientation(event) {
  //     let beta = event.beta; 
  //     // if (beta > 90) {
  //     //   alert('¡Giraste el celular hacia abajo!');
  //     // }

  //     beta = Math.floor(beta); 

  //     setRote(beta)
  //   }
  //   return () => {
  //     window.removeEventListener('deviceorientation', handleOrientation);
  //   };
  // }, []); 
  // const [rote, setRote] = useState(null);

  const [openMenu, setOpenmenu] = useState(false)

  const handleClick = (value) => {

    
    if(openMenu){
      document.querySelector('.wrap_body').classList.remove('open-menu');
      setOpenmenu(false)
      // alert('Hola')
    }else{
      if (value) {
        document.querySelector('.wrap_body').classList.add('open-menu');
        setOpenmenu(true)
      } 
    }

    
  };

  return (
    <>
      <div className="wrap">
        <div className="wrap_body" onClick={() =>{handleClick()}}>
          <div className="wrap_body_dashboard">
            <Header handleClick={handleClick}/>
            <div className="wrap_body_dashboard_content_photo">
              <div className="wrap_body_dashboard_content_photo_box">
                {/* <img src={ImageninicioPerfil} alt="" /> */}
              </div>
            </div>
            
            <div className="wrap_body_dashboard_content_text">
              <label htmlFor="">Andres Rodriguez</label>
              <br />
              <span>Desarrollador full stack</span>
            </div>
          </div>
        </div>
        <div className="wrap_menu">
          Hola
        </div>
      </div>
  
      

      
    </>
  );
};

export default Index;
