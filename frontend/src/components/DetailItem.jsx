// frontend/src/components/DetailItem.jsx
import styles from './DetailItem.module.css';

const DetailItem = ({ label, value, status, valueStyle }) => {
  let valueClasses = styles.value; // Base class for the value
  if (status === 'success') {
    valueClasses += ` ${styles.statusOn}`;
  } else if (status === 'error') {
    valueClasses += ` ${styles.statusOff}`;
  } else if (valueStyle === 'yellow') {
    valueClasses += ` ${styles.valueYellow}`;
  }
  // If value is "NORMAL" for "PRESET", it will just use the default white .value style

  const handleClick = () => {
    console.log(`Detail item clicked: ${label} - ${value}`);
    alert(`Clicked: ${label}`);
  };

  return (
    <div className={styles.detailItem} onClick={handleClick} title={`Info: ${label}`}>
      <span className={styles.label}>{label}</span>
      <span className={valueClasses}>{value}</span>
    </div>
  );
};
export default DetailItem;