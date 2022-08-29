import React from 'react'
import styles from '../styles/Me.module.css'

const Me = () => {
  return (
    <div className={ styles.data }>
    <h2 className={ styles.data__title }>
      Perlita la tapatia
    </h2>
    <p className={ styles.data__text }>
    Perlita nace de la necesidad de impregnar al usuario de la idiosincrasia del sitio donde se encuentra. De llenarlo de interés y curiosidad, es un nombre cuidadosamente pensado para respetar el nombre común con el que se conoce el estado. El nombre es sencillo de recordar, pronunciar y buscar, además de ser sutil y amigable con cualquiera que lo lea y absolutamente fácil de recordar. Perlita la tapatía es tu acompañante ideal y guía personal. Es un chatbot totalmente interactivo que te incita a mirar los lugares que te muestra. Incluye chistes, datos técnicos, información de algún monumento, lugares llamativos de la ciudad, curiosidades e incluso ayuda y asistencia en caso de necesitarla.
    </p>
  </div>
  )
}

export default Me