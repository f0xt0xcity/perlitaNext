import React from 'react'
import styles from '../styles/Place.module.css'

const Place = props => {
  
  const { imagen, titulo, descripcion, mapas } = props;

 
  return (
    <div className={ styles.container }>
      <img src={ imagen } alt="" className={ styles.img }/>
      <div className={ styles.containerText }>
        <h1 className={ styles.title }>{ titulo }</h1>
        <p className={ styles.about}>{ descripcion }</p>
        <a className={ styles.boton } href={ mapas ? `https://www.google.com/maps/place/${ titulo },+Jalisco”` :`https://www.google.com/search?q=${ titulo }`}>Ver mas informacion</a>
      </div>
    </div>
  )
}

export default Place