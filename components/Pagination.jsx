import styles from "../styles/Pagination.module.css";

const Pagination = (props) => {
  const { totalDatos, setPaginaActual, paginaActual } = props;

  let pages = [];
  for (let index = 1; index <= Math.ceil(totalDatos / 8); index++) {
    pages.push(index);
  }

  return (
    <ul className={styles.list}>
      {pages.map((item, index) => (
        <li
          key={index}
          className={
            index == paginaActual ? styles.list__activo : styles.list__inactivo
          }
          onClick={() => setPaginaActual(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
