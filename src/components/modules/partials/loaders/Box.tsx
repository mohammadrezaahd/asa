import styles from "./styles/Basic.module.css";

const BoxLoader = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className={styles.loader}>
        <div className={`${styles.box} ${styles.box0}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box1}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box7}`}>
          <div />
        </div>
        <div className={styles.ground}>
          <div />
        </div>
      </div>
    </div>
  );
};

export default BoxLoader;
