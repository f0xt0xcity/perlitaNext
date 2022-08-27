import { useEffect, useState } from 'react'
import Head from 'next/head'
import Banner from '../components/Banner'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import axios from 'axios'

export default function Home() {

  const [atracciones, setAtracciones] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      const url = 'http://127.0.0.1/api/atracciones?limite=4';
      const { data : informacion } = await axios( url );
      setAtracciones( informacion.atracciones );
    }
    consultarApi();
  }, []);

  const data = [
    { titulo : 'Teatro degollado', link : 'place', texto : 'Este es un texto de prueba', ubicacion : 'Guadalajara', imagen : '/img/HospicioCabañas.jpg'},
    { titulo : 'Teatro degollado', link : 'place', texto : 'Este es un texto de prueba', ubicacion : 'Guadalajara', imagen : '/img/HospicioCabañas.jpg'},
    { titulo : 'Teatro degollado', link : 'place', texto : 'Este es un texto de prueba', ubicacion : 'Guadalajara', imagen : '/img/HospicioCabañas.jpg'},
    { titulo : 'Teatro degollado', link : 'place', texto : 'Este es un texto de prueba', ubicacion : 'Guadalajara', imagen : '/img/HospicioCabañas.jpg'},
  ]

  return (
    <Layout >
      <main>
        <Banner />
        <CardList titulo={'Atractivos turisticos'} datos={ atracciones } ubicacion = { true }/>
      </main>

    </Layout >
  )
}
