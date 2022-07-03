import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import { AnimeModel } from '../model/anime';

interface cardProps {
  anime: AnimeModel;
}

const Card = ({ anime }: cardProps) => {
  const [isLowerThan415] = useMediaQuery('(max-width: 415px)');

  const TextStyle = {
    textAlign: 'center',
    width: '97%',
    maxHeight: '50px',
    pl: '3%',
    overflow: 'hidden',
    fontSize: 'large',
    userSelect: 'none',
    bg: 'var(--main-bg)',
  };

  return (
    <a href={anime.external[0]} target='_blanck'>
      <Box
        w={isLowerThan415 ? '38vw' : '200px'}
        h={isLowerThan415 ? '290px' : '390px'}
        rounded='15px'
        overflow='hidden'
        bg='var(--main-bg)'
        boxShadow='0px 5px 27px -5px #000000'>
        <Image
          src={anime.image}
          alt={anime.title}
          width={isLowerThan415 ? '200px' : '200px'}
          height='320px'
          objectFit='cover'
        />
        <Box bg='var(--main-bg)'>
          <Text sx={TextStyle}>{anime.title}</Text>
        </Box>
      </Box>
    </a>
  );
};

export default Card;
