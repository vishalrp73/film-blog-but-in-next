import type { NextPage } from 'next';
import { Search } from '../components/Search';
import FilmGrid from '../components/FilmGrid';

const Home: NextPage = () => {
  return (
    <>
      <Search />
      <FilmGrid />
    </>
  );
};

export default Home;
