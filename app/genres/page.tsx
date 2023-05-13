import type { Metadata } from 'next';
import Link from 'next/link';
import { getGenres } from '@/lib/fetch';

export const metadata: Metadata = {
  title: 'genres',
};

export default async function Page() {
  const data: Promise<string[]> = getGenres();
  const genres = await data;

  return (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {genres.map((genre) => (
        <div>
          <h5>
            <Link href={`/genres/${genre}`}>{genre}</Link>
          </h5>
        </div>
      ))}
    </section>
  );
}
