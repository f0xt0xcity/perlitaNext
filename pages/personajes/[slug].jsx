import Layout from '../../components/Layout';
import Place from '../../components/Place';

const PlacePage = ({ personaje }) => {

  const { nombre, img, descripcion } = personaje.personaje;

  return (
    <Layout>
      <Place  titulo={ nombre} imagen={ img } descripcion={ descripcion }/>
    </Layout>
  )
}

export async function getServerSideProps({ query : { slug } }) {
  const url = `https://api.perlitalatapatia.click/api/personajes/${ slug }`;
  const respuesta = await fetch( url );
  const personaje = await respuesta.json();
  return {
    props : {
      personaje
    }
  }
}

export default PlacePage;