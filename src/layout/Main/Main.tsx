import styles from './Main.module.sass';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className={styles.base}>
      <div className={styles.inner}>
        {children}
      </div>
    </main>
  );
};

export default Main;