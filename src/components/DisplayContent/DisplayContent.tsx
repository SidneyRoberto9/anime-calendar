import React, { useState } from 'react';

import { AnimeModel } from '../../model/anime';
import Card from '../Card/Card';
import styles from './DisplayContent.module.scss';

interface DisplayContentProps {
  animesOfDay: Array<AnimeModel>;
}

function DisplayContent({ animesOfDay }: DisplayContentProps) {
  return (
    <div className={styles.display}>
      <div className={styles.containerCardStyle}>
        {animesOfDay.map((anime, index) => (
          <Card anime={anime} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DisplayContent;
