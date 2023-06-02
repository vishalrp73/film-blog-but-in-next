import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearch } from '../../lib/hooks/useSearch';
import Sort from '../Sort/Sort';
import { useSort } from '@/lib/hooks/useSort';
import SearchIcon from '../../lib/img/search-icon.png';
import ResetIcon from '../../lib/img/reset-icon.png';
import * as styles from './MiniSearch.css';
import { Film } from '../../lib/types';
import { getRandomNumber } from '@/lib/functions';
import clsx from 'clsx';
import { halfOpacity } from '../../styles/opacity.css';
import Dropdown from '../Dropdown/Dropdown';
import { useSearchContext } from '@/context/search';

interface SearchProps {
  films: Film[];
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MiniSearch: FC<SearchProps> = ({ films, toggle, setToggle }) => {
  const { searchTerm, setSearchTerm, handleClear } = useSearch(films);
  const { setSearchedFilms } = useSearchContext();
  const { yearOrder, setYearOrder, alphaOrder, setAlphaOrder, handleSort } =
    useSort(films);
  const [popup, setPopup] = useState<boolean>(false);
  const [highlightedFilm, setHighlightedFilm] = useState<Film | null>(null);
  const [backingImage, setBackingImage] = useState<string | null>(null);

  useEffect(() => {
    if (highlightedFilm) {
      const randomNumber = getRandomNumber(highlightedFilm.img_bank.length);
      setBackingImage(highlightedFilm.img_bank[randomNumber]);
    }
  }, [highlightedFilm]);

  const handleReset = () => {
    handleClear();
    setSearchedFilms(films);
    setYearOrder(null);
    setAlphaOrder(null);
  };

  if (toggle) {
    return (
      <div
        style={popup ? { backgroundImage: `url(${backingImage})` } : {}}
        className={styles.superMaxContainer}
      >
        <div className={styles.miniContainer}>
          <div className={styles.searchContainer}>
            <input
              autoFocus
              className={clsx(styles.input, {
                [halfOpacity]: highlightedFilm,
              })}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={styles.resetBtn}
              type="button"
              onClick={handleReset}
            >
              <Image src={ResetIcon} alt="reset" width={16} height={16} />
            </button>
          </div>
          <div className={styles.functionalGroup}>
            {searchTerm !== '' && (
              <>
                <Sort
                  className={clsx({ [halfOpacity]: highlightedFilm })}
                  type="year"
                  order={yearOrder}
                  handleSort={() => handleSort('year')}
                />
                <Sort
                  className={clsx({ [halfOpacity]: highlightedFilm })}
                  type="alpha"
                  order={alphaOrder}
                  handleSort={() => handleSort('alpha')}
                />
              </>
            )}
            <button
              className={clsx(styles.closeBtn, {
                [halfOpacity]: highlightedFilm,
              })}
              onClick={() => setToggle((prevState) => !prevState)}
            >
              X
            </button>
          </div>
          {searchTerm !== '' && (
            <div className={styles.dropdownContainer}>
              <Dropdown
                setPopup={setPopup}
                setHighlightedFilm={setHighlightedFilm}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!toggle) {
    return (
      <button
        className={styles.openSearchBtn}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <Image alt="search-button" src={SearchIcon} width={24} height={24} />
      </button>
    );
  }

  return null;
};

export default MiniSearch;
