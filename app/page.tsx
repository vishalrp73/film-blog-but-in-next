import { getFilms, getTopFive } from '@/lib/fetch';
import { Film } from '@/lib/types';
import { randomiseFilms } from '@/lib/functions';
import * as styles from './page.css';

export default async function Home() {
  const data: Promise<Film[]> = getFilms();
  const dataTopFive: Promise<Film[]> = getTopFive();
  const films = await data;
  const topFive = await dataTopFive;
  const randomisedFilms = randomiseFilms(films);
  const randomisedTopFive = randomiseFilms(topFive);

  return <main className={styles.main}></main>;
}
