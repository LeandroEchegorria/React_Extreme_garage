import { Container } from '@mui/system'
import React from 'react'
import './Servicios.css'

const Servicios = () => {
 
  return (
    <Container>
      <div className='servicios'>
        <h2>NUESTROS SERVICIOS</h2>
        <div>
          <p className='items1' id='items'>Tratamiento acrílico y cerámico</p>
          <p className='items2' id='items'>Venta y colocación de CreeLED</p>
          <p className='items3' id='items'>Mecánica ligera</p>
          <p className='items4' id='items'>Ploteo vehicular</p>
          <p className='items5' id='items'>Polarizado</p>
          <p className='items6' id='items'>Lavado de motor</p>
          <p className='items7' id='items'>Service automotor (Aceite, filtros, caja)</p>
          <p className='items8' id='items'>y mucho más....</p>
        </div>
      </div>
    </Container>
    
    
  )
}

export default Servicios

