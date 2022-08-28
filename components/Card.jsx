import React from 'react'
import Link from 'next/link'
import styles from  '../styles/Card.module.css'
import { useRouter } from 'next/router'

const Card = props => {

  const { imagen, ubicacion, titulo, texto, link, categoria, slug } = props;
  const router = useRouter();

  const onClick = () => {
    router.push(`/${ categoria }/${ slug }`);
  };

  return (
    <div className={ styles.card}> 
      <img className={ styles.card__img} src={ imagen } layout='responsive' alt="" />
      
      <div className={ styles.card__data }>
        { ubicacion && <p className={ styles.card__ubication }>{'📍 Guadalajara, Jal'}</p>}
        <h3 className={ styles.card__title } >
          { slug ? 
            <a  onClick= { onClick } className={ styles.card__link }>
            { titulo }
            </a>
            : 
            <a href={ link } className={ link && styles.card__link }>
              { titulo }
            </a>
            }
        </h3>
        <p className={ styles.card__text }>
          { texto }
        </p>
      </div>
    </div>
  )
}

export default Card