'use client';
import { type FC } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { Film } from '@/lib/types';
import { useSearch } from '@/lib/hooks';
import Seal from '@/lib/img/golden-seal.png';
import { HamburgerMenu } from '../Buttons';
import SearchContainer from './SearchContainer';
import { translucent } from '@/styles/translucent.css';
import * as styles from './Header.css';

interface Props {
  films: Film[];
  bannerText: string;
  placeholderTitle: string;
  selectedBannerImage: StaticImageData;
}

const Header: FC<Props> = ({
  films,
  bannerText,
  placeholderTitle,
  selectedBannerImage,
}) => {
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
            src={Seal.src}
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
        <SearchContainer
          films={films}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClear={handleClear}
          placeholderTitle={placeholderTitle}
        />
      </div>
    </div>
  );
};

export default Header;
