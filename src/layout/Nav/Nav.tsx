import styles from './Nav.module.sass';
import { Link } from 'react-router';
import { useState } from 'react';

const Nav = () => {
  const [navOpen,setNavOpen] = useState<boolean>(false)
  const handleNavClick = () =>{
    setNavOpen((prev) => !prev )
  }
  return (
    <div className={styles.base}>
      <div className={styles.hamburger}>
        <button onClick={() => handleNavClick()} >{navOpen ? "CLOSE" : "OPEN"}</button>
      </div>
      <nav className={`${styles.nav} ${navOpen && styles['is-active']}`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link onClick={() => handleNavClick()} to="/">HOME</Link>
          </li>
          <li className={styles.item}>
            <Link onClick={() => handleNavClick()} to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;