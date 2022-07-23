import Link from 'next/link';
import React from 'react';

import dayWeek from '../../utils/date.util';
import styles from './Header.module.scss';

interface HeaderProps {
  actualDay: string;
  animeQtd: number;
}

const Header = ({ actualDay, animeQtd }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.home}>
          <Link href={'/'}>&#x21bb;</Link>
        </div>
        <div className={styles.qtd}>
          <span> Available Animes: {animeQtd}</span>
        </div>

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
