import Link from 'next/link';
import React from 'react';

import dayWeek from '../../utils/date.util';
import styles from './Header.module.scss';

interface HeaderProps {
  actualDay: string;
}

const Header = ({ actualDay }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {dayWeek.map((day, index) => (
          <Link href={`/${day}`} key={index}>
            <span
              className={`${styles.button} ${
                day == actualDay ? styles.selected : ''
              }`}>
              {day}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
