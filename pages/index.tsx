import Router from 'next/router';
import { CSSProperties, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import dayWeek from '../src/utils/date.util';
import style from '../styles/Home.module.scss';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  marginTop: '40vh',
  width: '150px',
  height: '150px',
};

export default function Home() {
  useEffect(() => {
    const { pathname } = Router;
    const day = new Date().getDay();

    if (pathname === '/') {
      Router.push(`/${dayWeek[day]}`);
    }
  }, []);

  return (
    <div className={style.home}>
      <ClipLoader color='#1d1825' cssOverride={override} />
    </div>
  );
}
