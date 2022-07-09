import React, { useState } from 'react';

import Card from '../Card/Card';
import styles from './DisplayContent.module.scss';

interface DisplayContentProps {
  animesOfDay: any[];
}

function DisplayContent({ animesOfDay }: DisplayContentProps) {
  return (
    <div className={styles.containerCardStyle}>
      {animesOfDay.map((anime: any, index: number) => (
        <Card anime={anime} key={index} />
      ))}
    </div>
  );
}

export default DisplayContent;
