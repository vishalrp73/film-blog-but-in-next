import { Film } from '@/lib/types';
import { getFilm, getFilms } from '@/lib/fetch';
import FilmDetails from '@/components/FilmDetails/FilmDetails';
import { randomiseFilms } from '@/lib/functions';
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

  return (
    <>
      <div className={styles.fixedHeaderContainer}>
        <h2 style={{ color: 'white' }}>{film.title}</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.miniSearchContainer}>
          <FilmDetails films={randomisedFilms} />
        </div>
      </div>
    </>
  );
}
