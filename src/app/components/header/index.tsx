import styles from './header.module.sass';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="header__title">SKIYAKI LGTM MAKER</h1>
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