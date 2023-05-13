import { Film } from '@/lib/types';
import { getFilm } from '@/lib/fetch';

type Params = {
  params: {
    filmId: string;
  };
};

export default async function Film({ params: { filmId } }: Params) {
  const data: Promise<Film> = getFilm(filmId);
  const film = await Promise.resolve(data);

  return (
    <div>
      <h2 style={{ color: 'white' }}>{film.title}</h2>
      <h2 style={{ color: 'white' }}>{film.director}</h2>
    </div>
  );
}
