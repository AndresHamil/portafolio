import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.scss';

import { useGlobalContextProvider } from './../../GlobalContextProvider';



const Header = () => {

    const { estadoGlobal, setEstadoGlobal } = useGlobalContextProvider();

    return (
        <>
            <div className="and-header">
                <div className="and-header_content">
                    <div className="and-header_content_nav">
                        <ul>
                            {/* <li><NavLink to="/portafolio"><span>{menuStates}</span></NavLink></li> */}
                            <li><NavLink to="/portafolio"><span>Inicio</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Acerca</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Servicios</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Habilidades</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Contacto</span></NavLink></li>
                        </ul>


                     <MenuIcon
                        onClick={() => {setEstadoGlobal(true)}}
                        className='icon-menu'
                        style={{ fill: estadoGlobal ? 'rgb(255, 255, 255)' : 'rgba(230, 210, 210, 0.648)' }}
                    />


                     {/* color: rgb(255, 255, 255); */}



                
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;