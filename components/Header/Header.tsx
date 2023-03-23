import type { FC } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { getRandomNumber } from '../../handlers/sort';
import { useFilmContext } from '../../context/films';
import julia from '../../lib/img/julia-fox.jpg';
import seal from '../../lib/img/golden-seal.png';
import { Search } from '../Search';
import { ResetButton } from '../ResetButton/ResetButton';
import Sort from '../Sort/Sort';
import * as styles from './Header.css';
import { translucent } from '../../styles/translucent.css';

const Header: FC = () => {
  const { searchTerm } = useFilmContext();
  const backgroundImages: StaticImageData[] = [julia];
  const randomBackroundImageNumber = getRandomNumber(backgroundImages.length);
  const selectedBannerImage = backgroundImages[randomBackroundImageNumber];
  const bannerTextOptions: string[] = [
    'Now in Smell-O-Vision!',
    'JOE MAMA',
    "It's 90% white people!",
    'This is peak film-bro (circa 2021)',
    'Powered by hater-ade',
  ];
  const bannerTextRandomNumber: number = getRandomNumber(
    bannerTextOptions.length,
  );
  const bannerText: string = bannerTextOptions[bannerTextRandomNumber];

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
          <ResetButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
