import type { FC } from 'react';
import FixedHeader from '../FixedHeader/FixedHeader';
import Pagination from '../Pagination/Pagination';
import { Film } from '@/lib/types';

interface Props {
  films: Film[];
  title: string;
}

const FilmsCategory: FC<Props> = ({ films, title }) => {
  return (
    <div>
      <FixedHeader films={films} title={decodeURIComponent(title)} />
      <div style={{ paddingTop: 80 }}>
        <Pagination films={films} />
      </div>
    </div>
  );
};

export default FilmsCategory;
