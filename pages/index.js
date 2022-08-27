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
      const url = 'https://api.perlitalatapatia.click/api/atracciones?limite=4';
      const { data : informacion } = await axios( url );
      setAtracciones( informacion.atracciones );
    }
    consultarApi();
  }, []);

  return (
    <Layout >
      <main>
        <Banner />
        <CardList titulo={'Atractivos turisticos'} datos={ atracciones } ubicacion = { true }/>
      </main>

    </Layout >
  )
}
