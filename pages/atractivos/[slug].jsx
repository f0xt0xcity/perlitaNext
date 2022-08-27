import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout';

const PlacePage = () => {
  
  const [personaje, setPersonaje] = useState({});
  
  const router = useRouter();
  const slug = router.query.slug;
  console.log( slug )
  useEffect(() => {
    const url = `http://127.0.0.1/api/atractivos/${ slug }`;
    const consultarApi = async() => {
      const { data : informacion } = await axios( url );
      setPersonaje( informacion );
    };
    consultarApi();
  }, []);

  return (
    <Layout>
      <h1>slug</h1>
    </Layout>
  )
}

export default PlacePage