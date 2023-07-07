'use client';
import {
  useState,
  useMemo,
  type FC,
  type Dispatch,
  type SetStateAction,
} from 'react';
import clsx from 'clsx';
import { useSearchContext } from '@/context/search';
import { Film } from '@/lib/types';
import { useSearch, useSort, useToggle } from '@/lib/hooks';
import { getRandomNumber } from '@/lib/functions';
import SearchIcon from '@/lib/img/search-icon.png';
import ResetIcon from '@/lib/img/reset-icon.png';
import Image from 'next/image';
import { Sort } from '../Buttons';
import Dropdown from './Dropdown/Dropdown';
import { halfOpacity } from '@/styles/opacity.css';
import * as styles from './MiniSearch.css';

interface Props {
  films: Film[];
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MiniSearch: FC<Props> = ({ films, toggle, setToggle }) => {
  const { searchTerm, setSearchTerm, handleClear } = useSearch(films);
  const { setSearchedFilms } = useSearchContext();
  const { yearOrder, setYearOrder, alphaOrder, setAlphaOrder, handleSort } =
    useSort(films);
  const [showPopup, togglePopup] = useToggle(false);
  const [hoveredFilm, setHoveredFilm] = useState<Film | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useMemo(() => {
    if (hoveredFilm) {
      const randomNumber = getRandomNumber(hoveredFilm.img_bank.length);
      setBackgroundImage(hoveredFilm.img_bank[randomNumber]);
    }
  }, [hoveredFilm]);

  const handleReset = () => {
    handleClear();
    setSearchedFilms(films);
    setYearOrder(null);
    setAlphaOrder(null);
  };

  if (toggle) {
    return (
      <div
        style={showPopup ? { backgroundImage: `url(${backgroundImage})` } : {}}
        className={styles.superMaxContainer}
      >
        <div className={styles.miniContainer}>
          <div className={styles.searchContainer}>
            <input
              autoFocus
              className={clsx(styles.input, {
                [halfOpacity]: hoveredFilm,
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
                  className={clsx({ [halfOpacity]: hoveredFilm })}
                  type="year"
                  order={yearOrder}
                  handleSort={() => handleSort('year')}
                />
                <Sort
                  className={clsx({ [halfOpacity]: hoveredFilm })}
                  type="alpha"
                  order={alphaOrder}
                  handleSort={() => handleSort('alpha')}
                />
              </>
            )}
            <button
              className={clsx(styles.closeBtn, {
                [halfOpacity]: hoveredFilm,
              })}
              onClick={() => setToggle((prevState) => !prevState)}
            >
              X
            </button>
          </div>
          {searchTerm !== '' && (
            <div className={styles.dropdownContainer}>
              <Dropdown
                setPopup={togglePopup}
                setHighlightedFilm={setHoveredFilm}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <button
      className={styles.openSearchBtn}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      <Image alt="search-button" src={SearchIcon} width={24} height={24} />
    </button>
  );
};

export default MiniSearch;
