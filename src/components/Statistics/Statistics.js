//Модули
import React from 'react';
import PropTypes from 'prop-types';

// Компоненты
import StatisticsItem from './StatisticsItem';

// Стили
import styles from './Statistics.module.css';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const Statistics = ({ title, stats }) => (
  <>
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className={styles.item}
            key={id}
            style={{
              backgroundColor: randomColor(),
            }}
          >
						<StatisticsItem label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  </>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
