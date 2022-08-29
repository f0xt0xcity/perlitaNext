import Layout from '../../components/Layout';
import Place from '../../components/Place';

const PlacePage = ({ pueblo }) => {

  const { nombre, img, descripcion } = pueblo.pueblo;

  return (
    <Layout>
      <Place  titulo={ nombre} imagen={ img } descripcion={ descripcion } mapas = { true }/>
    </Layout>
  )
}

export async function getServerSideProps({ query : { slug } }) {
  const url = `https://api.perlitalatapatia.click/api/pueblos/${ slug }`;
  const respuesta = await fetch( url );
  const pueblo = await respuesta.json();
  return {
    props : {
      pueblo
    }
  }
}

export default PlacePage;