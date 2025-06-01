// frontend/src/components/ActionButtons.jsx
import React from 'react'; // Make sure React is imported for useState
import styles from './ActionButtons.module.css';

const ActionButtons = () => {
  const [isFavorited, setIsFavorited] = React.useState(false);
  const [favoriteCount, setFavoriteCount] = React.useState(13672);

  const handleAction = (action) => {
    console.log(`${action} button clicked`);
    alert(`${action} clicked!`);
  };

  const handleFavorite = () => {
    const newFavoritedState = !isFavorited;
    setIsFavorited(newFavoritedState);
    setFavoriteCount(prevCount => newFavoritedState ? prevCount + 1 : prevCount - 1);
    console.log(`Favorite toggled. Is favorited: ${newFavoritedState}`);
    alert(`Favorite toggled! Now: ${newFavoritedState ? 'Favorited' : 'Not Favorited'}`);
  };

  return (
    <div className={styles.actions}>
      <button onClick={() => handleAction('JOIN')} className={`bf4-button ${styles.joinButton}`}>JOIN</button>
      <button onClick={() => handleAction('SPECTATE')} className="bf4-button">SPECTATE</button>
      <button onClick={() => handleAction('JOIN AS COMMANDER')} className="bf4-button">JOIN AS COMMANDER</button>
      <div // Changed to div for better control with icon, but styled as button
        onClick={handleFavorite}
        className={`bf4-button ${styles.favoriteButton} ${isFavorited ? styles.isFavoritedActive : ''}`}
        title={isFavorited ? "Remove from favorites" : "Add to favorites"}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleFavorite()}
      >
        {isFavorited ? <span className={styles.starFilled}>★</span> : <span className={styles.starOutline}>☆</span>}
        <span className={styles.favoriteCount}>{favoriteCount}</span>
      </div>
    </div>
  );
};
export default ActionButtons;