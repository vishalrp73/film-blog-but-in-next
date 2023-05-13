import { Film } from '@/lib/types';
import { getGenre } from '@/lib/fetch';

type Params = {
  params: {
    genre: string;
  };
};

export default async function Page({ params: { genre } }: Params) {
  const data: Promise<Film[]> = getGenre(genre);
  const films = await Promise.resolve(data);

  return (
    <>
      <h1 style={{ color: 'white' }}>{genre}</h1>
      {films.map((film) => (
        <h4 style={{ color: 'white' }}>{film.title}</h4>
      ))}
    </>
  );
}
