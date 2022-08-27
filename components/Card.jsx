import React from 'react'
import Link from 'next/link'
import styles from  '../styles/Card.module.css'
import { useRouter } from 'next/router'

const Card = props => {

  const { imagen, ubicacion, titulo, texto, link } = props;
  const router = useRouter();

  const onClick = () => {
    router.push(`/place/${ link }`);
  };

  return (
    <div className={ styles.card}> 
      <img className={ styles.card__img} src={ imagen } layout='responsive' alt="" />
      
      <div className={ styles.card__data }>
        { ubicacion && <p className={ styles.card__ubication }>{'📍 Guadalajara, Jal'}</p>}
        <h3 className={ styles.card__title } onClick= { onClick }>
          { link ? 
            <a className={ styles.card__link }>
            { titulo }
            </a>
            : titulo}
        </h3>
        <p className={ styles.card__text }>
          { texto }
        </p>
      </div>
    </div>
  )
}

export default Card