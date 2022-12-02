
import React from 'react'
import './Home.css'
import Carta from '../components/Card/Carta'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>      
      <div className='card-container'>
        <Link to={`/galeria`}>
          <Carta 
            title='Galería' 
            text='Galería de Fotos de nuestros trabajos'
            image='https://res.cloudinary.com/ddylqd7fx/image/upload/v1667141272/Extreme_Garage_reactjs/images/3_qywpbu.jpg'      
          />
        </Link>
      </div>
      <div className='card-container'>
        <Link to={`/servicios`}>
          <Carta 
            title='Servicios' 
            text='Conozca los servicios que realizamos. Trabajamos con todas las marcas de autos'
            image='https://res.cloudinary.com/ddylqd7fx/image/upload/v1667141272/Extreme_Garage_reactjs/images/1_fsgmaa.jpg'      
          />
        </Link>
      </div>
      <div className='card-container'>
        <Link to={`/contacto`}>
          <Carta 
              title='Contacto' 
              text='Seguinos en nuestras redes sociales para más información'
              image='https://res.cloudinary.com/ddylqd7fx/image/upload/v1667141272/Extreme_Garage_reactjs/images/2_cvjovr.jpg'      
            /> 
        </Link>
 
      </div>     
    </div>
  )
}

export default Home
