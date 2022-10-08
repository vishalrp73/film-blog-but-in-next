import { FC, useState } from 'react';
import { Film } from '../../lib/types';
import { MiniSearch } from '../Search';
import Header from './Header';
import * as styles from './FilmDetails.css';

interface FilmProps {
  film: Film;
}

const FilmDetails: FC<FilmProps> = ({ film }) => {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <MiniSearch toggle={toggleSearch} setToggle={setToggleSearch} />
      <Header title={film.title} />
    </div>
  );
};

export default FilmDetails;
