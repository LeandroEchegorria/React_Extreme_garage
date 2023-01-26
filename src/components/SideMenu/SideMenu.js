import React from 'react';
import './SideMenu.css';
import logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import SocialMediaMenu from '../SocialMediaMenu/SocialMediaMenu';



const SideMenu = () => {
  return (
    
        
        <div className='menu'>
          <img src={logo} className='logo-menu' alt=''></img>
          <ul className='menu-pages'>
            <button>
              <Link to={`/`}><li>Home</li></Link>
            </button>
            <button>
              <Link to={`/galeria`}><li>Galeria</li></Link>
            </button>
            <button>
              <Link to={`/servicios`}><li>Servicios</li></Link>
              
            </button>
            <button>
              <Link to={`/contacto`}><li>Contacto</li></Link>
            </button>
            
          </ul>
          <SocialMediaMenu/>
        </div> 
  )
}

export default SideMenu;
