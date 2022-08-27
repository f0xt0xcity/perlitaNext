import { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from '../components/CardList'
import Layout from '../components/Layout'

const Pueblos = () => {

  const [pueblos, setPersonajes] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      //! Actualizar a la api
      const url = 'https://api.perlitalatapatia.click/api/pueblos';
      const { data : informacion } = await axios( url );
      setPersonajes( informacion.pueblos );
    }
    consultarApi()
  }, []);

  return (
    <Layout>
      <CardList datos={ pueblos } titulo={'Pueblos magicos del estado de Jalisco'} ubicacion={ true }/>
    </Layout>
  )
}

export default Pueblos