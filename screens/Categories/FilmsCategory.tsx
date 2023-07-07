import { type FC } from 'react';
import { Film } from '@/lib/types';
import { FixedHeader } from '@/components/Header';
import Pagination from '@/components/Pagination';

interface Props {
  films: Film[];
  allFilms: Film[];
  title: string;
}

const FilmsCategory: FC<Props> = ({ films, allFilms, title }) => {
  return (
    <div>
      <FixedHeader films={allFilms} title={decodeURIComponent(title)} />
      <div style={{ paddingTop: 80 }}>
        <Pagination films={films} />
      </div>
    </div>
  );
};

export default FilmsCategory;
