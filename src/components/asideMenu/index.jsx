import React, { useState, useEffect } from 'react';
import { useGlobalContextProvider } from '../../GlobalContextProvider';
import WhatsApp from '../../assets/icons/whatsapp.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import closeIcon from './icons/close.svg';
import './styles.scss';

const AsideMenu = () => {
  const { estadoGlobal, setEstadoGlobal } = useGlobalContextProvider();
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'acerca', label: 'Acerca' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuItemClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setEstadoGlobal(false);
    }
  };

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
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`wrap_menu_items_item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            {item.label}
          </div>
        ))}
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
