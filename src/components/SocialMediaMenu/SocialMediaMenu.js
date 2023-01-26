import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './SocialMediaMenu.css';

export default function SocialMediaMenu() {
  return (
    <div className='socialMediaMenu'>
            
        <a href='https://www.facebook.com/EXTREMEGARAGE.DETAILING' target='_blank' rel="noreferrer"><FacebookIcon fontSize='large'/></a>
        <a href='https://www.instagram.com/extremegarage.detailing/' target='_blank' rel="noreferrer"><InstagramIcon fontSize='large'/></a>
        <a href='mailto:extremegarageargentina@gmail.com' ><MailOutlineIcon fontSize='large'/></a>
        <a href='https://www.youtube.com/channel/UCK2wciKDiH_8aPYo7GrFGSA' target='_blank' rel="noreferrer"><YouTubeIcon fontSize='large'/></a>

          
    </div>
  )
}
