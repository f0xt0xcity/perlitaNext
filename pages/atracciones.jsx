import axios from "axios";
import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";

const Atractivos = () => {
  const [atracciones, setAtracciones] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [totalDatos, setTotalDatos] = useState(0);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://www.api.perlitalatapatia.click/api/atracciones?pagina=${paginaActual}&limite=8`;
      const { data: informacion } = await axios(url);
      setAtracciones(informacion.atracciones);
      setTotalDatos( informacion.total );
    };
    consultarApi();
  }, [paginaActual]);

  return (
    <Layout>
      <CardList
        categoria={"atracciones"}
        datos={atracciones}
        titulo={"Atractivos turisticos de la ciudad"}
        totalDatos={ totalDatos }
        paginaActual={paginaActual}
        setPaginaActual={ setPaginaActual }
        ubicacion={true}
      />
    </Layout>
  );
};

export default Atractivos;
