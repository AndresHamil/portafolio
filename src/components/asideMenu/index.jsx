import React from 'react';
import { useGlobalContextProvider } from '../../GlobalContextProvider';
import WhatsApp from '../../assets/icons/whatsapp.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import closeIcon from './icons/close.svg';
import './styles.scss';

const AsideMenu = () => {
  const { estadoGlobal, setEstadoGlobal } = useGlobalContextProvider();

  return (
    <div className={`wrap_menu ${estadoGlobal ? 'open' : ''}`}>
        <div className="wrap_menu_header">
          <div className="wrap_menu_header_icon">
            <img 
              src={closeIcon}
              alt="Cerrar menú"
              onClick={() => { setEstadoGlobal(!estadoGlobal); }}
              style={{ cursor: 'pointer' }}
            />
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

          <div className="wrap_menu_items_item">
            Contacto
          </div>
        </div>

        <div className="wrap_menu_social">
          <div className="wrap_menu_social_box">
            <img src={WhatsApp} alt="WhatsApp" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={twitter} alt="Twitter" />
            <img src={github} alt="GitHub" />
          </div>
        </div>
      </div>
    );
};

export default AsideMenu;
