// frontend/src/components/FooterActions.jsx
import styles from './FooterActions.module.css';

const FooterActions = () => {
    const handleMapRotation = () => {
        console.log("MAP ROTATION button clicked.");
        alert("MAP ROTATION clicked!");
    };
  return (
    <div className={styles.footerActions}>
      <button onClick={handleMapRotation} className={`bf4-button ${styles.mapRotationButton}`}>MAP ROTATION</button>
    </div>
  );
};
export default FooterActions;