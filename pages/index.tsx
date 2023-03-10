import type { NextPage } from 'next';
import Header from '../components/Header';
import FilmGrid from '../components/FilmGrid/FilmGrid';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <FilmGrid />
    </div>
  );
};

export default Home;
