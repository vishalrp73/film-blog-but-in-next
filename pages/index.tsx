import type { NextPage } from 'next';
import Header from '../components/Header';
import FilmGrid from '../components/FilmGrid/FilmGrid';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FilmGrid />
    </>
  );
};

export default Home;
