// frontend/src/components/ServerTitle.jsx
import styles from './ServerTitle.module.css';

const ServerTitle = () => {
  return (
    <div className={styles.serverTitleContainer}>
      <h1 className={styles.mainTitle}>
        {/* <img src="/img/de-flag.svg" alt="DE" className={styles.flagIcon} /> */}
        ! RC3-BASEMAPS
      </h1>
      <p className={styles.subtitle}>CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ</p>
      <p className={styles.serverDescription}>
        Server protected by The_K40 AntiCheat. Site Rules, Questions, Request, Appeal, Visit us: www.rc3.gg - Discord: https://discord.gg/rc3crew
      </p>
    </div>
  );
};
export default ServerTitle;