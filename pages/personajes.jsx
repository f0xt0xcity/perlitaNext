import axios from 'axios'
import { useEffect, useState } from 'react'
import CardList from '../components/CardList'
import Layout from '../components/Layout'

const personajes = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      const url = 'https://www.api.perlitalatapatia.click/api/personajes';
      const { data : informacion } = await axios( url );
      setPersonajes( informacion.personajes );
    }
    consultarApi()
  }, []);

  return (
    <Layout>
      <CardList datos={ personajes } titulo={'Personajes destacados del estado de Jalisco'}/>
    </Layout>
  )
}

export default personajes