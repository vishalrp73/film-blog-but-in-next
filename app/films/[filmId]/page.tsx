import { Film } from '@/lib/types';
import { getFilm, getFilms } from '@/lib/fetch';
import FilmDetails from '@/components/FilmDetails/FilmDetails';
import { getRandomNumber, randomiseFilms } from '@/lib/functions';
import SidebarPanel from '@/components/SidebarPanel/SidebarPanel';
import * as styles from './page.css';
import MainContent from '@/components/FilmDetails/MainContent';

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

  const randomBgImageNumber = getRandomNumber(trivia.length);
  const bgImage = img_bank[randomBgImageNumber];

  console.log(film);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.fixedHeaderContainer}>
        <h2 className={styles.headingTitle}>{film.title}</h2>
        <div className={styles.miniSearchContainer}>
          <FilmDetails films={randomisedFilms} />
        </div>
      </div>
      <div className={styles.container}>
        <SidebarPanel film={film} randomTrivia={randomTrivia} />
        <MainContent film={film} />
      </div>
    </div>
  );
}
