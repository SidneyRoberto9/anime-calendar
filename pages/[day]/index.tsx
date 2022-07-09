import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import DisplayContent from '../../src/components/DisplayContent/DisplayContent';
import Header from '../../src/components/Header/Header';
import { AnimeModel } from '../../src/model/anime';

function Day({
  dateAnime,
}: InferGetServerSidePropsType<
  typeof getServerSideProps
>): JSX.Element {
  const router = useRouter();
  const { day } = router.query;

  let actualAnimes: AnimeModel[] = [];

  dateAnime.map((data) => {
    if (data.day === day) {
      actualAnimes = data.animes;
    }
  });

  return (
    <>
      <Header actualDay={day as string} />
      <DisplayContent animesOfDay={actualAnimes} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get<AnimeModel[]>(
    `${process.env.API}/animes-airing`
  );

  const dateAnime: any[] = [
    {
      day: 'Dom',
      animes: data.filter((anime) => anime.date.day === 'domingo'),
    },
    {
      day: 'Seg',
      animes: data.filter((anime) => anime.date.day === 'segunda'),
    },
    {
      day: 'Ter',
      animes: data.filter((anime) => anime.date.day === 'terca'),
    },
    {
      day: 'Qua',
      animes: data.filter((anime) => anime.date.day === 'quarta'),
    },
    {
      day: 'Qui',
      animes: data.filter((anime) => anime.date.day === 'quinta'),
    },
    {
      day: 'Sex',
      animes: data.filter((anime) => anime.date.day === 'sexta'),
    },
    {
      day: 'Sab',
      animes: data.filter((anime) => anime.date.day === 'sabado'),
    },
  ];

  return {
    props: {
      dateAnime,
    },
  };
}

export default Day;
