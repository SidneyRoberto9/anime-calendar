import Router from 'next/router';
import { CSSProperties, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import dayWeek from '../src/utils/date.util';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  position: 'absolute',
  left: '40vw',
  top: '40vh',
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
    <>
      <ClipLoader color='#1d1825' cssOverride={override} />
    </>
  );
}
