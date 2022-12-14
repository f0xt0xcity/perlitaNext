import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {

  const navItems = [
    { path : '/', text : 'Inicio'},
    { path : '/atracciones', text : 'Atractivos turisticos'},
    { path : '/pueblos', text : 'Pueblos magicos'},
    { path : '/about', text : 'Quien soy?'},
    { path : '/personajes', text : 'Personajes destacados'}
  ]

  return  (
  <>
    <Head>
      <title>Perlita la tapatia</title>
      <meta name="description" content="Esta es perlita la tapatia" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={ styles.header }>
      <div className={ styles.header__data }>
        <Link href={'/'}>
          <img src="/img/myAvatar.png" alt="" className={ styles.header__img }/>
        </Link>
      </div>
      <nav className={ styles.navegation }>
        <ul className={ styles.navegation__list }>
          { navItems.map( item =>
              <Link href={ item.path } key={ item.path }>
                <a className={ styles.navegation__item } >
                    { item.text }
                </a>
              </Link>
          )}

            <Link href={'/talk'}>
              <a className={ styles.navegation__cta }>
                Habla conmigo
              </a>
            </Link>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Header