import { useEffect, useState } from 'react'
import Head from 'next/head'
import Banner from '../components/Banner'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import axios from 'axios'
import Me from '../components/Me'

export default function Home() {

  const [atracciones, setAtracciones] = useState([]);
  const [pueblos, setPueblos] = useState([]);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      const urlAtracciones = 'https://api.perlitalatapatia.click/api/atracciones?limite=4';
      const urlPersonajes = 'https://api.perlitalatapatia.click/api/personajes?limite=4';
      const urlPueblos = 'https://api.perlitalatapatia.click/api/pueblos?limite=4&pagina=1';
      const [ personajesData, pueblosData, atraccionesData ] = await Promise.all([
        axios( urlPersonajes),
        axios( urlPueblos ),
        axios( urlAtracciones )
      ]);
      setAtracciones( atraccionesData.data.atracciones );
      setPersonajes( personajesData.data.personajes );
      setPueblos( pueblosData.data.pueblos );
    }
    consultarApi();
  }, []);
 
  return (
    <Layout >
      <main>
        <Banner />
        <Me />
        <CardList categoria={ 'atracciones' } titulo={'Atractivos turisticos'} datos={ atracciones } ubicacion = { true }/>
        <CardList categoria={ 'personajes' } titulo={'Personajes destacados'} datos={ personajes }/>
        <CardList categoria={ 'pueblos' } titulo={'Pueblos magicos'} datos={ pueblos }/>
      </main>

    </Layout >
  )
}
