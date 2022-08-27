import React from 'react'
import CardList from '../components/CardList'
import Layout from '../components/Layout'
import styles from '../styles/Talk.module.css'

const Talk = () => {

  const data = [
    { titulo : 'Google', texto : 'Solo tienes que abrir Google assistant y decir "Hablar con Perlita la tapatia".', imagen : '/img/assitant.jpeg'},
    { titulo : 'Telegram', texto : 'Solo tienes que abrir Telegram y buscar a Perlita la tapatia.', imagen : '/img/telegram.jpeg', link : 'https://t.me/PerlalaTapatia_bot'},
    { titulo : 'Messenger', texto : 'Solo tienes que abrir Facebook/Messenger y buscar a perlita la tapatia.', imagen : '/img/messenger.jpeg', link : 'https://m.me/perlitalatapatia/'},
    { titulo : 'Web', texto : 'Dale click a este texto que esta subrayados para ser dirigido.', imagen : '/img/MyAvatar.png', link : '/perlita'},
  ]

  return (
    <Layout>
      <CardList titulo={'Habla conmigo en estas plataformas'} datos={ data }/>
    </Layout>
  )
}

export default Talk