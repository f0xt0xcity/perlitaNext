import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Place.module.css'

const Place = props => {
  
  const { imagen, titulo, descripcion, boton } = props;


  return (
    <main className={ styles.main }>
      <div className={ styles.container }>
        <img src={ imagen } alt="" className={ styles.img }/>
        <div className={ styles.containerText }>
          <h1 className={ styles.title }>{ titulo }</h1>
          <p className={ styles.about}>{ descripcion }</p>
        </div>
      </div>
    </main>
  )
}

export default Place