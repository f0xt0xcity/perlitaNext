import React from 'react'
import CardList from '../components/CardList'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

const About = () => {

  const data = [
    { nombre : 'Manuel Infante | Desarollo', descripcion : 'Aficionado a la tecnología, entusiasta del conocimiento y siempre dispuesto a aprender. Acérrimo practicante de la informática y el marketing.', img : '/img/manuel.jpeg'},
    { nombre : 'Juan Morales | Copywriter', descripcion : 'Perlita ha sido la puerta que inició el camino de aprendizaje al mundo de los bots. Los errores han sido los mejores maestros, los buenos resultados han sido la mejor recompensa.', img : '/img/juan.jpeg'},
    // { titulo : 'Manuel Infante', texto : 'Este es un texto de prueba', imagen : '/img/ManuelInfanteBarbosa.jpg'},
  ]

  return (
    <Layout>
      <div className={ styles.container }>
        <div className={ styles.data }>
          <h1 className={ styles.title }>Perlita la tapatia</h1>
          <p className={ styles.about }>
          Perlita nace de la necesidad de impregnar al usuario de la idiosincrasia del sitio donde se
          encuentra. De llenarlo de interés y curiosidad, es un nombre cuidadosamente pensado para
          respetar el nombre común con el que se conoce el estado. El nombre es sencillo de recordar,
          pronunciar y buscar, además de ser sutil y amigable con cualquiera que lo lea y absolutamente
          fácil de recordar. Perlita la tapatía es tu acompañante ideal y guía personal.
          Es un chatbot totalmente interactivo que te incita a mirar los lugares que te muestra.
          Incluye chistes, datos técnicos, información de algún monumento, lugares llamativos de la
          ciudad, curiosidades e incluso ayuda y asistencia en caso de necesitarla.
          Disponible para ayudar las 24 horas del día, puedes tocar el sitio que deseas visitar y mediante
          la tecnología de google maps te indica cómo llegar. Incluso con recomendaciones
          personalizadas a tiempo real, de esta manera te podría recomendar llevar protector solar si hace
          mucho sol, o sombrilla si hay probabilidad alta de lluvia.
          Perlita es apta para el uso tanto de niños como de adultos. Todos pueden aprender un poco
          sobre el estado con Perlita. También puede hacer recomendaciones de tours donde las
          excursiones escolares sean más interesantes y llenas de muchos sitios para aprender.
          El chatbot está diseñado para el turismo, mostrarle a los turistas esos pueblitos mágicos en
          temporadas importantes donde más visitantes tiene nuestro estado.
          El chatbot nació en Telegram como una versión beta y base para pruebas, donde se logró una
          versión estable y evolucionada. Lo que le dio la madurez y solidez para ser aprobada por la
          plataforma tanto de Facebook como de Google Assistant. Así pues se ha logrado ampliar el
          catálogo de disponibilidad y alcance del chatbot para abarcar todos los espacios.
          Actualmente podría tener una nueva evolución y migrar hacia las páginas web, donde mediante
          el uso de una base de datos se pueden consultar nuevas preguntas para agregar al chatbot y
          hacerlo aún más interactivo, inteligente y útil.
          </p>
        </div>
        <img src="/img/MyAvatar.png" alt="" className={ styles.img }/>
      </div>
      <div>
        <CardList titulo={'Nuestro equipo'} datos={ data } />
      </div>
    </Layout>
  )
}

export default About