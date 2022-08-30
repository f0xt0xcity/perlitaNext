import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [totalDatos, setTotalDatos] = useState(0);
  const [paginaActual, setPaginaActual] = useState(0);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://www.api.perlitalatapatia.click/api/personajes?pagina=${paginaActual}&limite=8`;
      const { data: informacion } = await axios(url);
      setPersonajes(informacion.personajes);
      setTotalDatos(informacion.total);
    };
    consultarApi();
  }, [paginaActual]);

  return (
    <Layout>
      <CardList
        categoria={"personajes"}
        datos={personajes}
        titulo={"Personajes destacados del estado de Jalisco"}
        totalDatos={totalDatos}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
      />
    </Layout>
  );
};

export default Personajes;
