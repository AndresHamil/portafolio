import React from 'react';
import Header from '../../components/header/index';
import AsideMenu from '../../components/asideMenu/index';
import './styles.scss';







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
          <AsideMenu />
        </div>

      
    </>
  );
};

export default Index;
