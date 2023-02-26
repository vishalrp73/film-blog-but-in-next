import type { FC } from 'react';
import { StaticImageData } from 'next/image';
import { getRandomNumber } from '../../handlers/sort';
import julia from '../../lib/img/julia-fox.jpg';
import seal from '../../lib/img/golden-seal.png';
import * as styles from './Header.css';
import { Search } from '../Search';
import Sort from '../Sort/Sort';

const Header: FC = () => {
  const backgroundImages: StaticImageData[] = [julia];
  const randomNumber = getRandomNumber(backgroundImages.length);
  const selectedBannerImage = backgroundImages[randomNumber];

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${selectedBannerImage.src})` }}
    >
      <img
        src={seal.src}
        width={250}
        height={250}
        className={styles.goldenSeal}
      />
      <h1 className={styles.title}>VISHAL'S PRETENTIOUS FILM BLOG</h1>
      <div className={styles.description}>
        <p>Howdy friends!</p>
        <br />
        <p>Welcome to my film blog</p>
        <br />
        <p>NOW WITH HAND CRAFTED GRAPHICS!</p>
        <br />
      </div>
      <Search />
      <Sort type="random" />
      <Sort type="genre" />
    </div>
  );
};

export default Header;
