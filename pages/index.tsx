import axios from 'axios';

import TabsList from '../src/components/TabsList';
import { AnimeModel, DateAnime } from '../src/model/anime';

import type { InferGetServerSidePropsType, NextPage } from 'next';
export default function Home({
  dateAnime,
}: InferGetServerSidePropsType<
  typeof getServerSideProps
>): JSX.Element {
  return (
    <>
      <TabsList tabContent={dateAnime} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get<AnimeModel[]>(
    `${process.env.API}/animes-airing`
  );

  const dateAnime: DateAnime[] = [
    {
      day: 'Domingo',
      daySimple: 'Dom',
      animes: data.filter((anime) => anime.date.day === 'domingo'),
    },
    {
      day: 'Segunda',
      daySimple: 'Seg',
      animes: data.filter((anime) => anime.date.day === 'segunda'),
    },
    {
      day: 'Terça',
      daySimple: 'Ter',
      animes: data.filter((anime) => anime.date.day === 'terca'),
    },
    {
      day: 'Quarta',
      daySimple: 'Qua',
      animes: data.filter((anime) => anime.date.day === 'quarta'),
    },
    {
      day: 'Quinta',
      daySimple: 'Qui',
      animes: data.filter((anime) => anime.date.day === 'quinta'),
    },
    {
      day: 'Sexta',
      daySimple: 'Sex',
      animes: data.filter((anime) => anime.date.day === 'sexta'),
    },
    {
      day: 'Sábado',
      daySimple: 'Sab',
      animes: data.filter((anime) => anime.date.day === 'sabado'),
    },
  ];

  return {
    props: {
      dateAnime,
    },
  };
}
