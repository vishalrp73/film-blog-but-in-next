import type { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { getRandomNumber } from '../../handlers/sort';
import { useFilmContext } from '../../context/films';
import julia from '../../lib/img/julia-fox.jpg';
import seal from '../../lib/img/golden-seal.png';
import { Search } from '../Search';
import Sort from '../Sort/Sort';
import ResetIcon from '../../lib/img/reset-icon.png';
import * as styles from './Header.css';
import { translucent } from '../../styles/translucent.css';

const Header: FC = () => {
  const {
    films,
    searchTerm,
    setSearchedFilms,
    setGenreSearchedFilms,
    setSearchTerm,
  } = useFilmContext();
  const backgroundImages: StaticImageData[] = [julia];
  const randomNumber = getRandomNumber(backgroundImages.length);
  const selectedBannerImage = backgroundImages[randomNumber];
  const bannerText: string =
    'Sponsored by Coca-Cola: The world leader in cavities and general dental fuckery';

  const handleReset = () => {
    setSearchTerm('');
    setSearchedFilms(films);
    setGenreSearchedFilms(null);
  };

  return (
    <div
      className={clsx(styles.container, {
        [styles.smallContainer]: searchTerm !== '',
      })}
      style={{ backgroundImage: `url(${selectedBannerImage.src})` }}
    >
      {searchTerm === '' && (
        <>
          <img
            src={seal.src}
            width={250}
            height={250}
            className={styles.goldenSeal}
          />
          <h1 className={clsx(styles.title, translucent)}>
            VISHAL'S PRETENTIOUS FILM BLOG
          </h1>
          <div className={clsx(styles.description, translucent)}>
            <p>{bannerText}</p>
          </div>
        </>
      )}
      <div className={styles.inputsContainer}>
        <Search />
        <div className={styles.btnGroup}>
          <Sort type="random" />
          <Sort type="reviewed" />
          <Sort type="genre" />
          {/** TO DO FIX: this breaks the sort genres if you click them and then click reset */}
          <button className={styles.resetBtn} onClick={handleReset}>
            <Image src={ResetIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
