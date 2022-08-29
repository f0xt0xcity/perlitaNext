import { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from '../components/CardList'
import Layout from '../components/Layout'

const Pueblos = () => {

  const [pueblos, setPersonajes] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      const url = 'https://api.perlitalatapatia.click/api/pueblos';
      const { data : informacion } = await axios( url );
      setPersonajes( informacion.pueblos );
    }
    consultarApi()
  }, []);

  return (
    <Layout>
      <CardList categoria={ 'pueblos' } datos={ pueblos } titulo={'Pueblos magicos del estado de Jalisco'}/>
    </Layout>
  )
}

export default Pueblos