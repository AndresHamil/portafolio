import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = () => {

    return (
        <>
            <div className="and-header">
                <div className="and-header_content">
                    <div className="and-header_content_nav">
                        <ul>
                            <li><NavLink to="/portafolio"><span>Acerca</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Habilidades</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Educacion</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Lenguajes</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Trayectoria</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Contacto</span></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="and-header_menu">
                    Hola
                </div>
            </div>
        </>
    );
}

export default Header;