import { Film } from '@/lib/types';
import { getArtist } from '@/lib/fetch';

type Params = {
  params: {
    artist: string;
  };
};

export default async function Artist({ params: { artist } }: Params) {
  const data: Promise<Film[]> = getArtist(artist);
  const films = await Promise.resolve(data);

  return (
    <>
      <h1 style={{ color: 'white' }}>{artist}</h1>
      {films.map((film) => (
        <h4 style={{ color: 'white' }}>{film.title}</h4>
      ))}
    </>
  );
}
