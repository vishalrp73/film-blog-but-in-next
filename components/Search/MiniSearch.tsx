import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import { useFilmContext } from '../../context/films';
import { useSearch } from '../../lib/hooks/useSearch';
import Sort from '../Sort/Sort';
import Dropdown from './Dropdown';
import SearchIcon from '../../lib/img/search-icon.png';
import * as styles from './MiniSearch.css';
import { Film } from '../../lib/types';
import { getRandomNumber } from '../../handlers/sort';
import clsx from 'clsx';
import { halfOpacity } from '../../styles/opacity.css';

interface SearchProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MiniSearch: FC<SearchProps> = ({ toggle, setToggle }) => {
  const { searchTerm, setSearchTerm } = useFilmContext();
  const [popup, setPopup] = useState<boolean>(false);
  const [highlightedFilm, setHighlightedFilm] = useState<Film | null>(null);
  const [backingImage, setBackingImage] = useState<string | null>(null);

  useEffect(() => {
    if (highlightedFilm) {
      const randomNumber = getRandomNumber(highlightedFilm.img_bank.length);
      setBackingImage(highlightedFilm.img_bank[randomNumber]);
    }
  }, [highlightedFilm]);

  useSearch(searchTerm);

  if (toggle) {
    return (
      <div
        style={popup ? { backgroundImage: `url(${backingImage})` } : {}}
        className={styles.superMaxContainer}
      >
        <div className={styles.miniContainer}>
          <input
            autoFocus
            className={clsx(styles.input, {
              [halfOpacity]: highlightedFilm,
            })}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles.functionalGroup}>
            {searchTerm !== '' && (
              <>
                <Sort
                  className={clsx({ [halfOpacity]: highlightedFilm })}
                  type="year"
                />
                <Sort
                  className={clsx({ [halfOpacity]: highlightedFilm })}
                  type="alpha"
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
        <Image src={SearchIcon} />
      </button>
    );
  }

  return null;
};

export default MiniSearch;
