import React from 'react';
import Header from '../../components/header/index';
import './styles.scss';

import  WhatsApp  from '../../assets/icons/whatsapp.png'
import  linkedin  from '../../assets/icons/linkedin.png'
import  twitter  from '../../assets/icons/twitter.png'
import  github  from '../../assets/icons/github.png'







import { useGlobalContextProvider } from './../../GlobalContextProvider';









const Index = () => {

  
  const { estadoGlobal, setEstadoGlobal } = useGlobalContextProvider();

  return (
    <>

        <div className="wrap">
          <div className={`wrap_body ${estadoGlobal ? 'open-menu' : ''}`} onClick={() => { if (estadoGlobal) setEstadoGlobal(!estadoGlobal); }}>
            <Header/>
            <div className="wrap_body_dashboard">
              
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

            <div className="wrap_body_present">
              Hola
            </div>
          </div>
          {estadoGlobal && 
            <div className="wrap_menu">

              <div className="wrap_menu_header">
                <div className="wrap_menu_header_icon">
                  <span 
                    class="material-symbols-outlined" 
                    onClick={() => { setEstadoGlobal(!estadoGlobal); }}>
                      close_small
                  </span>
                  
                </div>
                
              </div>

              <div className="wrap_menu_items">
                <div className="wrap_menu_items_item">
                  Inicio
                </div>

                <div className="wrap_menu_items_item">
                  Acerca
                </div>

                <div className="wrap_menu_items_item">
                  Servicios
                </div>

                <div className="wrap_menu_items_item active">
                  Habilidades
                </div>

                <div className="wrap_menu_items_item ">
                  Contacto
                </div>
              </div>
              <div className="wrap_menu_social">
                <div className="wrap_menu_social_box">
                  <img src={WhatsApp} alt="" />
                  <img src={linkedin} alt="" />
                  <img src={twitter} alt="" />
                  <img src={github} alt="" />
                </div>
              </div>
            </div>
          }
        </div>

      
    </>
  );
};

export default Index;
