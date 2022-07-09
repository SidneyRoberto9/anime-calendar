import Link from 'next/link';
import React from 'react';

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
            <button
              className={`${styles.button} ${
                day == actualDay ? styles.selected : ''
              }`}>
              {day}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

const dayWeek: string[] = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab',
];

export default Header;
