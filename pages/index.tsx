import axios from 'axios';

import Header from '../components/Header';

import type { InferGetServerSidePropsType, NextPage } from 'next';

export default function Home({
  animes,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <>
      <Header data={animes} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/animes-airing`);

  const animes = [
    {
      day: 'Domingo',
      daySimple: 'Dom',
      animes: data.filter((anime: any) => anime.date.day === 'domingo'),
    },
    {
      day: 'Segunda',
      daySimple: 'Seg',
      animes: data.filter((anime: any) => anime.date.day === 'segunda'),
    },
    {
      day: 'Terça',
      daySimple: 'Ter',
      animes: data.filter((anime: any) => anime.date.day === 'terca'),
    },
    {
      day: 'Quarta',
      daySimple: 'Qua',
      animes: data.filter((anime: any) => anime.date.day === 'quarta'),
    },
    {
      day: 'Quinta',
      daySimple: 'Qui',
      animes: data.filter((anime: any) => anime.date.day === 'quinta'),
    },
    {
      day: 'Sexta',
      daySimple: 'Sex',
      animes: data.filter((anime: any) => anime.date.day === 'sexta'),
    },
    {
      day: 'Sábado',
      daySimple: 'Sab',
      animes: data.filter((anime: any) => anime.date.day === 'sabado'),
    },
  ];

  return {
    props: {
      animes,
    },
  };
}
