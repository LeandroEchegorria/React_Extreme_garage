import { Container } from '@mui/system'
import React from 'react'
import './Servicios.css'

const Servicios = () => {
 
  return (
    <Container>
      <div className='servicios'>
        <h2>NUESTROS SERVICIOS</h2>
        <div>
          <div>
            <h2 className='items1' id='items'>Detailing:</h2>
            <p className='items2' id='items'>Tratamiento acrílico y cerámico</p>
            <p className='items2' id='items'>Vidrio Líquido</p>
            <p className='items2' id='items'>Pulido de ópticas</p>
            <p className='items2' id='items'>Limpieza de interior (Tapizado)</p>
            <p className='items2' id='items'>Lavado de motor</p>
          </div>
          <div>
            <h2 className='items3' id='items'>Autoradio:</h2>
            <p className='items4' id='items'>Ploteo vehicular</p>
            <p className='items4' id='items'>Polarizado</p>
            <p className='items4' id='items'>Blackhousing</p>
            <p className='items4' id='items'>CreeLED</p>
            <p className='items4' id='items'>Tira DRL</p>
            <p className='items4' id='items'>Giro Fijo</p>
            <p className='items4' id='items'>Música</p>
            <p className='items4' id='items'>Carga de Aire Acondicionado</p>
            <p className='items4' id='items'>Cierre centralizado</p>
            <p className='items4' id='items'>Levanta cristales</p>
            <p className='items4' id='items'>Alarma</p>
          </div>
          <div>
            <h2 className='items5' id='items'>Mecánica:</h2>
            <p className='items6' id='items'>Tren Delantero</p>
            <p className='items6' id='items'>Suspensión</p>
            <p className='items6' id='items'>Frenos</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Servicios;

