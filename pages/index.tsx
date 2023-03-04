import type { NextPage } from 'next';
import Header from '../components/Header';
import FilmGrid from '../components/FilmGrid/FilmGrid';
import { EmblaCarousel } from '../components/FilmGrid/Carousel';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FilmGrid />
    </>
  );
};

export default Home;
