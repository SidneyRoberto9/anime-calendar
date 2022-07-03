import Tabs from '../components/Tabs/Tabs';
import clientPromise from '../lib/mongodb';

import type { NextPage } from 'next';

const Home: NextPage = (props) => {
  return (
    <>
      <Tabs />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
