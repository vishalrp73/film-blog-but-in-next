import { Film } from '@/lib/types';
import { getFilm, getFilms } from '@/lib/fetch';
import { getRandomNumber, randomiseFilms } from '@/lib/functions';
import { FixedHeader } from '@/components/Header';
import { MainContent, Sidebar } from '@/components/FilmDetails';
import * as styles from './page.css';

type Params = {
  params: {
    filmId: string;
  };
};

export default async function Film({ params: { filmId } }: Params) {
  const data: Promise<Film> = getFilm(filmId);
  const filmsData: Promise<Film[]> = getFilms();
  const film = await Promise.resolve(data);
  const films = await filmsData;
  const randomisedFilms = randomiseFilms(films);
  const { trivia, img_bank } = film;
  const randomTriviaNumber = getRandomNumber(trivia.length);
  const randomTrivia = trivia[randomTriviaNumber];

  const randomBgImageNumber = getRandomNumber(img_bank.length);
  const bgImage = img_bank[randomBgImageNumber];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <FixedHeader films={randomisedFilms} title={film.title} />
      <div className={styles.container}>
        <Sidebar film={film} randomTrivia={randomTrivia} />
        <MainContent film={film} />
      </div>
    </div>
  );
}
