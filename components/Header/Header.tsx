import type { FC } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { getRandomNumber } from '../../handlers/sort';
import { useFilmContext } from '../../context/films';
import julia from '../../lib/img/julia-fox.jpg';
import seal from '../../lib/img/golden-seal.png';
import { Search } from '../Search';
import Sort from '../Sort/Sort';
import * as styles from './Header.css';
import { translucent } from '../../styles/translucent.css';

const Header: FC = () => {
  const { searchTerm } = useFilmContext();
  const backgroundImages: StaticImageData[] = [julia];
  const randomNumber = getRandomNumber(backgroundImages.length);
  const selectedBannerImage = backgroundImages[randomNumber];

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
            <p>Howdy friends!</p>
            <br />
            <p>Welcome to my film blog</p>
            <br />
            <p>NOW WITH HAND CRAFTED GRAPHICS!</p>
            <br />
          </div>
        </>
      )}
      <Search />
      <div className={styles.btnGroup}>
        <Sort type="random" />
        <Sort type="genre" />
      </div>
    </div>
  );
};

export default Header;
