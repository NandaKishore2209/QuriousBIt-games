import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailColumn from './DetailColumn';
import styles from './ServerDetailsColumns.module.css';

const ServerDetailsColumns = () => {
  const [details, setDetails] = useState({ settings: [], advanced: [], rules: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        // Ensure your backend is running on http://localhost:3001
        const response = await axios.get('http://localhost:3001/api/server-details');
        setDetails(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load server details. Is the backend running?');
        console.error(err);
        // Keep default structure or provide some fallback
        setDetails({ settings: [], advanced: [], rules: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) {
    return <div className={styles.message}>Loading server details...</div>;
  }

  if (error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <DetailColumn title="Settings" items={details.settings} />
      <DetailColumn title="Advanced" items={details.advanced} />
      <DetailColumn title="Rules" items={details.rules} />
    </div>
  );
};

export default ServerDetailsColumns;