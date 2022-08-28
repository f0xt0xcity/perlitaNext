import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Place.module.css'

const Place = props => {
  
  const { imagen, titulo, descripcion } = props;

 
  return (
    <div className={ styles.container }>
      <img src={ imagen } alt="" className={ styles.img }/>
      <div className={ styles.containerText }>
        <h1 className={ styles.title }>{ titulo }</h1>
        <p className={ styles.about}>{ descripcion }</p>
        <a className={ styles.boton } href={`https://www.google.com/search?q=${ titulo }`}>Ver mas informacion</a>
      </div>
    </div>
  )
}

export default Place