// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => (
  <>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}</span>
  </>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
