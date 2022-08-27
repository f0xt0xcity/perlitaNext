import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {

  const navItems = [
    { path : '/', text : 'Inicio'},
    { path : '/atractivos', text : 'Atractivos turisticos'},
    { path : '/pueblos', text : 'Pueblos magicos'},
    { path : '/about', text : 'Quien soy?'},
    { path : '/personajes', text : 'Personajes destacados'},
    { path : '/talk', text : 'Habla conmigo'}
  ]


  return (
    <footer className={ styles.footer }>
      <div className={ styles.data }>
        <h3 className={ styles.data__title }>
          Perlita la tapatia
        </h3>
        <p className={ styles.data__text }>
        Perlita nace de la necesidad de impregnar al usuario de la idiosincrasia del sitio donde se encuentra. De llenarlo de interés y curiosidad, es un nombre cuidadosamente pensado para respetar el nombre común con el que se conoce el estado. El nombre es sencillo de recordar, pronunciar y buscar, además de ser sutil y amigable con cualquiera que lo lea y absolutamente fácil de recordar. Perlita la tapatía es tu acompañante ideal y guía personal. Es un chatbot totalmente interactivo que te incita a mirar los lugares que te muestra. Incluye chistes, datos técnicos, información de algún monumento, lugares llamativos de la ciudad, curiosidades e incluso ayuda y asistencia en caso de necesitarla.
        </p>
      </div>
      <nav className={ styles.navegation}>
        <p className={ styles.footer__links }>Links utiles</p>
        <ul className={ styles.navegation__list }>
          { navItems.map( item =>
              <Link href={ item.path } key={ item.path }>
                <a className={ styles.navegation__item } >
                    { item.text }
                </a>
              </Link>
          )}

        </ul>
      </nav>
    </footer>
  )
}

export default Footer