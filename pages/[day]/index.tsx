import { InferGetServerSidePropsType } from 'next';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { airing } from '../../lib/api';
import DisplayContent from '../../src/components/DisplayContent/DisplayContent';
import Header from '../../src/components/Header/Header';
import { AnimeDay, AnimeModel } from '../../src/model/anime';

function Day({
  dateAnime,
}: InferGetServerSidePropsType<
  typeof getServerSideProps
>): JSX.Element {
  const router = useRouter();
  const { day } = router.query;
  const actualDay: string = String(day);

  let actualAnimes: Array<AnimeModel> = [];

  useEffect(() => {
    setInterval(() => {
      Router.push('/');
    }, 18000000);
    // 5 horas
  }, []);

  dateAnime.map((data) => {
    if (data.day === actualDay) {
      actualAnimes = data.animes.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }
  });

  return (
    <>
      <Header actualDay={actualDay} />
      <DisplayContent animesOfDay={actualAnimes} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await airing.get<AnimeModel[]>('');

  const dateAnime: AnimeDay[] = [
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
