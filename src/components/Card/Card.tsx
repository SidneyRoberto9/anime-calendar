import Image from 'next/image';
import React from 'react';

import { AnimeModel } from '../../model/anime';
import styles from './Card.module.scss';

interface Cardprops {
  anime: AnimeModel;
}

const Card = ({ anime }: Cardprops) => {
  return (
    <div className={styles.cardBox}>
      <a href={anime.external[0]} target='_blanck'>
        <Image
          src={anime.image}
          alt={anime.title}
          width='200px'
          height='320px'
          objectFit='cover'
        />
        <div className={styles.titleCard}>
          <h6 className={styles.title}>{anime.title}</h6>
        </div>
      </a>
    </div>
  );
};

export default Card;
