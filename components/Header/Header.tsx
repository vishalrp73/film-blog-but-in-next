import type { FC } from 'react';
import clsx from 'clsx';
import * as styles from './Header.css';
import { translucent } from '../../styles/translucent.css';
import seal from '../../lib/img/golden-seal.png';
import { StaticImageData } from 'next/image';
import { useSearch } from '@/lib/hooks/useSearch';
import { Film } from '@/lib/types';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchSort from '../SearchSort/SearchSort';

interface Props {
  films: Film[];
  bannerText: string;
  selectedBannerImage: StaticImageData;
}

const Header: FC<Props> = ({ films, selectedBannerImage, bannerText }) => {
  const { searchTerm, setSearchTerm, handleClear } = useSearch(films);
  return (
    <div
      className={clsx(styles.container, {
        [styles.smallContainer]: searchTerm !== '',
      })}
      style={{ backgroundImage: `url(${selectedBannerImage.src})` }}
    >
      <div className={styles.hamburgerContainer}>
        <HamburgerMenu />
      </div>
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
        <SearchSort
          films={films}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
};

export default Header;
