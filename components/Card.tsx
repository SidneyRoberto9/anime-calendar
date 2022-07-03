import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface cardProps {
  anime: any;
}

const Card = (props: cardProps) => {
  const { anime } = props;

  return (
    <a href={anime.external[0]} target='_blanck'>
      <Box w='225px' h='300px'>
        <Image src={anime.image} alt={anime.title} width='225px' height='200px' />
        <Box>
          <Text>{anime.title}</Text>
        </Box>
      </Box>
    </a>
  );
};

export default Card;
