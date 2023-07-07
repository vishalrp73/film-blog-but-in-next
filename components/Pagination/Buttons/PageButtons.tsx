import { type FC, type Dispatch, type SetStateAction } from 'react';
import clsx from 'clsx';
import { Film } from '@/lib/types';
import { filterButtons, filterBtn, activeBtn } from './Buttons.css';

interface Props {
  slicedFilms: Film[][];
  selectedFilms: Film[];
  setSelectedFilms: Dispatch<SetStateAction<Film[]>>;
}

const PageButtons: FC<Props> = ({
  slicedFilms,
  selectedFilms,
  setSelectedFilms,
}) => {
  return (
    <div className={filterButtons}>
      {slicedFilms.map((f, idx) => (
        <button
          key={idx}
          type="button"
          value={idx}
          onClick={() => setSelectedFilms(slicedFilms[idx])}
          className={clsx(filterBtn, {
            [activeBtn]: slicedFilms[idx] === selectedFilms,
          })}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default PageButtons;
