import styles from './Footer.module.sass';

const Footer = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <footer className={styles.base}>
      <div className={styles.inner}>
        <small className={styles.copyright}>
          © {getYear()} C Team. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;