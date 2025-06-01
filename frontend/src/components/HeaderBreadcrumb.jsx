// frontend/src/components/HeaderBreadcrumb.jsx
import styles from './HeaderBreadcrumb.module.css';

const HeaderBreadcrumb = () => {
  const handleClick = (page) => {
    console.log(`${page} breadcrumb clicked`);
    // In a real app, this would navigate
  };
  return (
    <nav className={styles.breadcrumb}>
      {/* <span className={styles.backArrow} onClick={() => handleClick('Back')}><</span> */}
      <span onClick={() => handleClick('Multiplayer')}>MULTIPLAYER</span>
      <span className={styles.separator}>/</span>
      <span onClick={() => handleClick('Server Browser')}>SERVER BROWSER</span>
      <span className={styles.separator}>/</span>
      <span className={styles.active}>SERVER INFO</span>
    </nav>
  );
};
export default HeaderBreadcrumb;