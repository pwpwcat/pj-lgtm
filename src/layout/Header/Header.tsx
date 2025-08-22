import styles from './Header.module.sass';
import { Nav } from '../Nav';

const Header = () => {
  
  return (
    <header className={styles.base}>
      <h1 className={styles.title}>SKIYAKI LGTM MAKER</h1>
      <Nav />
    </header>
  );
};

export default Header;