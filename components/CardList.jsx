import React from "react";
import Card from "./Card";
import styles from "../styles/CardList.module.css";
import Pagination from "./Pagination";

const CardList = (props) => {
  const { datos, titulo, grid3, ubicacion, categoria, totalDatos, paginaActual, setPaginaActual  } = props;

  return (
    <div className={styles.cardList}>
      <h2 className={styles.title}>{titulo}</h2>
      <div className={grid3 ? styles.grid3 : styles.cardListGrid}>
        {datos.map((item) => (
          <Card
            key={item.slug}
            titulo={item.nombre}
            imagen={item.img}
            texto={item.descripcion}
            categoria = { categoria }
            ubicacion={ubicacion}
            slug={item.slug}
            link={ item.link }
          />
        ))}
      </div>

      <Pagination totalDatos={ totalDatos } paginaActual={ paginaActual } setPaginaActual={ setPaginaActual }/>
    </div>
  );
};

export default CardList;
