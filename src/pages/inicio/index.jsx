import React from 'react';
import './styles.scss';

// COMPONENTES
import Header from '../../components/header/index';


// IMAGENES

import ImageninicioPerfil from '../../assets/img/inicio/perfil.webp'



const Index = () => {
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