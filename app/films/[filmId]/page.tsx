import HeaderMenu from '@/components/FilmDetails/HeaderMenu';
import MainContent from '@/components/FilmDetails/MainContent';
import SidebarPanel from '@/components/SidebarPanel/SidebarPanel';
import { getFilm, getFilms } from '@/lib/fetch';
import { getRandomNumber, randomiseFilms } from '@/lib/functions';
import { Film } from '@/lib/types';
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

  const randomBgImageNumber = getRandomNumber(trivia.length);
  const bgImage = img_bank[randomBgImageNumber];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.fixedHeaderContainer}>
        <h2 className={styles.headingTitle}>{film.title}</h2>
        <div className={styles.miniSearchContainer}>
          <HeaderMenu films={randomisedFilms} />
        </div>
      </div>
      <div className={styles.container}>
        <SidebarPanel film={film} randomTrivia={randomTrivia} />
        <MainContent film={film} />
      </div>
    </div>
  );
}
