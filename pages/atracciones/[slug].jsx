import Layout from '../../components/Layout';
import Place from '../../components/Place';

const PlacePage = ({ atractivo }) => {

  const { nombre, img, descripcion } = atractivo.atraccion;

  return (
    <Layout>
      <Place  titulo={ nombre} imagen={ img } descripcion={ descripcion }/>
    </Layout>
  )
}

export async function getServerSideProps({ query : { slug } }) {
  const url = `https://api.perlitalatapatia.click/api/atracciones/${ slug }`;
  const respuesta = await fetch( url );
  const atractivo = await respuesta.json();
  return {
    props : {
      atractivo
    }
  }
}

export default PlacePage;