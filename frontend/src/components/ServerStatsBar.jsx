// frontend/src/components/ServerStatsBar.jsx
import styles from './ServerStatsBar.module.css';

const ServerStatsBar = () => {
  return (
    <div className={styles.statsBar}>
      <div className={`${styles.statItem} ${styles.players}`}>
        <span className={styles.label}>PLAYERS</span>
        <span className={styles.value}>60/64</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.label}>PING</span>
        <span className={styles.value}>104ms</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.label}>TICKRATE</span>
        <span className={styles.value}>60 Hz</span>
      </div>
    </div>
  );
};
export default ServerStatsBar;