import React from 'react';
import './Footer.css';
import logo from '../../assets/img/Logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SocialMedia from '../SocialMedia/SocialMedia';


const Footer = () => {
  const url = 'https://goo.gl/maps/BLmdHGRc18sLpEZW9'
  return (
    
        
        <div className='footer'>
          <img src={logo} className='logo-footer' alt=''></img>
          
          <div className='text-footer'>
            <a href={url} target="_blank" rel="noreferrer">
              <LocationOnIcon className='maps'/>
              Martin Coronado 1780, Gregorio de Laferrere, Buenos Aires, Argentina
            </a>
            <p>Diseño web por Leandro Echegorría</p>
          </div>
          <SocialMedia/>
{/*           <div className='social-media'>
            <a href='https://www.facebook.com/EXTREMEGARAGE.DETAILING' target='_blank' rel="noreferrer"><FacebookIcon fontSize='large'/></a>
            <a href='https://www.instagram.com/extremegarage.detailing/' target='_blank' rel="noreferrer"><InstagramIcon fontSize='large'/></a>
            <a href='mailto:extremegarageargentina@gmail.com' ><MailOutlineIcon fontSize='large'/></a>
            <a href='https://www.youtube.com/channel/UCK2wciKDiH_8aPYo7GrFGSA' target='_blank' rel="noreferrer"><YouTubeIcon fontSize='large'/></a>

          </div> */}

        </div> 
  )
}

export default Footer;
