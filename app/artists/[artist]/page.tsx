import { Film } from '@/lib/types';
import { getArtist } from '@/lib/fetch';
import FilmsCategory from '@/components/CategoryPage/FilmsCategory';

type Params = {
  params: {
    artist: string;
  };
};

export default async function Artist({ params: { artist } }: Params) {
  const data: Promise<Film[]> = getArtist(artist);
  const films = await Promise.resolve(data);

  return <FilmsCategory films={films} title={artist} />;
}
