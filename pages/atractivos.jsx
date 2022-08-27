import axios from 'axios'
import { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import Layout from '../components/Layout'

const Atractivos = () => {

  const [atracciones, setAtracciones] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      const url = 'https://api.perlitalatapatia.click/api/atracciones';
      const { data : informacion } = await axios( url );
      setAtracciones( informacion.atracciones);
    }
    consultarApi();
  }, []);

  return (
    <Layout>
      <CardList categoria={ 'atractivos' } datos={ atracciones} titulo={'Atractivos turisticos de la ciudad'}/>
    </Layout>
  )
}

export default Atractivos