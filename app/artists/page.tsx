import type { Metadata } from 'next';
import Link from 'next/link';
import { getArtists } from '@/lib/fetch';

export const metadata: Metadata = {
  title: 'artists',
};

export default async function Page() {
  const data: Promise<string[]> = getArtists();
  const artists = await data;

  return (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {artists.map((artist) => (
        <div>
          <h5>
            <Link href={`/artists/${artist}`}>{artist}</Link>
          </h5>
        </div>
      ))}
    </section>
  );
}
