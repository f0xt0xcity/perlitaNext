import React from "react";
import Card from "./Card";
import styles from "../styles/CardList.module.css";
import { useRouter } from "next/router";

const CardList = (props) => {
  const { datos, titulo, grid3, ubicacion, categoria } = props;


  return (
    <div className={styles.cardList}>
      <h1 className={styles.title}>{titulo}</h1>
      <div className={grid3 ? styles.grid3 : styles.cardListGrid}>
        {datos.map((item) => (
          <Card
            key={item.slug}
            titulo={item.nombre}
            imagen={item.img}
            texto={item.descripcion}
            categoria = { categoria }
            ubicacion={ubicacion}
            link={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
