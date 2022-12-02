import React from 'react';
import './SideMenu.css';
import logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';


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
          <div className='social-media'>
            <a href='https://www.facebook.com/EXTREMEGARAGE.DETAILING' target='_blank' rel="noreferrer"><FacebookIcon fontSize='large'/></a>
            <a href='https://www.instagram.com/extremegarage.detailing/' target='_blank' rel="noreferrer"><InstagramIcon fontSize='large'/></a>
            <a href='mailto:extremegarageargentina@gmail.com' ><MailOutlineIcon fontSize='large'/></a>
            <a href='https://www.youtube.com/channel/UCK2wciKDiH_8aPYo7GrFGSA' target='_blank' rel="noreferrer"><YouTubeIcon fontSize='large'/></a>

          </div>
        </div> 
  )
}

export default SideMenu;
