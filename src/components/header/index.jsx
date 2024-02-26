import React from 'react';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/styles';
// import MenuIcon from './icons/menu.png';

import './styles.scss';



const Header = ({ handleClick }) => {

    return (
        <>
            <div className="and-header">
                <div className="and-header_content">
                    <div className="and-header_content_nav">
                        <ul>
                            <li><NavLink to="/portafolio"><span>Inicio</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Acerca</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Servicios</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Habilidades</span></NavLink></li>
                            <li><NavLink to="/portafolio"><span>Contacto</span></NavLink></li>
                        </ul>

                     <MenuIcon className='icon-menu' onClick={() => {handleClick(true)}}/>


                
                    </div>
                </div>
                <div className="and-header_menu">
                    {/* <MenuIcon/> */}
                </div>
            </div>
        </>
    );
}

export default Header;