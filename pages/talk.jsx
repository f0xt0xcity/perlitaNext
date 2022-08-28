import React from 'react'
import CardList from '../components/CardList'
import Layout from '../components/Layout'
import styles from '../styles/Talk.module.css'

const Talk = () => {

  const data = [
    { nombre : 'Google', descripcion : 'Solo tienes que abrir Google assistant y decir "Hablar con Perlita la tapatia".', img : '/img/assitant.jpeg'},
    { nombre : 'Telegram', descripcion : 'Solo tienes que abrir Telegram y buscar a Perlita la tapatia.', img : '/img/telegram.jpeg', link : 'https://t.me/PerlalaTapatia_bot'},
    { nombre : 'Messenger', descripcion : 'Solo tienes que abrir Facebook/Messenger y buscar a perlita la tapatia.', img : '/img/messenger.jpeg', link : 'https://m.me/perlitalatapatia/'},
    { nombre : 'Web', descripcion : 'Dale click a este texto que esta subrayados para ser dirigido.', img : '/img/MyAvatar.png', link : '/perlita'},
  ]

  return (
    <Layout>
      <CardList titulo={'Habla conmigo en estas plataformas'} datos={ data }/>
    </Layout>
  )
}

export default Talk