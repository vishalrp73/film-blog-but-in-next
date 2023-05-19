import Link from 'next/link';
import { getFilms } from '@/lib/fetch';
import { Film } from '@/lib/types';
import HomeComponent from '@/components/Home/Home';
import * as styles from './page.css';
import Search from '@/components/Search/Search';

export default async function Home() {
  const data: Promise<Film[]> = getFilms();
  const films = await data;

  return (
    <main className={styles.main}>
      <h1 style={{ color: 'white' }}>Header</h1>
      <h1 style={{ color: 'white' }}>Search &amp; Sort Options</h1>
      <HomeComponent movies={films ?? []}>
        <h1>Hello</h1>
      </HomeComponent>

      <h1 style={{ color: 'white' }}>Film Grid</h1>
      <Link href="/films">To films</Link>
      <Link href="/categories">To categories</Link>
      <Link href="/artists">To artist</Link>
      <Link href="/genres">To genres</Link>
      {/* {films.map((film) => (
        <h2 style={{ color: 'white' }}>{film.title}</h2>
      ))} */}
    </main>
  );
}
