import type { FC } from 'react';
import { useState } from 'react';
import { Film } from '../lib/types';
import { MiniSearch } from '../components/Search';
import { FilmDetailsHeader } from '../components/FilmDetails';
import * as styles from '../components/FilmDetails/FilmDetails.css';

interface FilmProps {
  film: Film;
}

const FilmDetailsPage: FC<FilmProps> = ({ film }) => {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <MiniSearch toggle={toggleSearch} setToggle={setToggleSearch} />
      <FilmDetailsHeader title={film.title} />
    </div>
  );
};

export default FilmDetailsPage;
