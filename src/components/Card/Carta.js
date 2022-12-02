import React from 'react'
import './Carta.css'

const Carta = (props) => {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <img src={props.image} alt='' style={{height:210, objectFit:'cover'}}></img>
        <p className='text'>{props.text}</p>

    </div>
  )
}

export default Carta
