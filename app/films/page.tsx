import type { Metadata } from 'next';
import { Film } from '@/lib/types';
import { getFilms } from '@/lib/getFilms';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'films',
};

export default async function Page() {
  const data: Promise<Film[]> = getFilms();
  const films = await data;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {films.map((film) => (
        <div>
          <h5>
            <Link href={`/films/${film.film_id}`}>{film.title}</Link>
          </h5>
        </div>
      ))}
    </section>
  );

  return content;
}
