import { useState } from 'react';
import styles from './Header.module.sass';
import { Link } from 'react-router';

const Header = () => {
  const [navText,setNavText] = useState<string>("OPEN")
  const handleNavClick = () =>{
    setNavText((prev) => prev === "OPEN" ? "CLOSE" : "OPEN" )
  }

  return (
    <header className={styles.header}>
      <h1 className="header__title">SKIYAKI LGTM MAKER</h1>
      <button onClick={() => handleNavClick()} >{navText}</button>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;