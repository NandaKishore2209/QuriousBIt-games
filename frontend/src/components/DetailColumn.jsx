// frontend/src/components/DetailColumn.jsx
import DetailItem from './DetailItem';
import styles from './DetailColumn.module.css';

const DetailColumn = ({ title, items }) => {
  if (!items || items.length === 0) {
    // Optionally return a placeholder or null
    return <div className={styles.column}><h3 className={styles.title}>{title}</h3><p>No data.</p></div>;
  }
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>{title}</h3>
      {items.map((item, index) => (
        <DetailItem
          key={index}
          label={item.label}
          value={item.value}
          status={item.status} // For ON/OFF color
          valueStyle={item.valueStyle} // For yellow numbers in RULES
        />
      ))}
    </div>
  );
};
export default DetailColumn;