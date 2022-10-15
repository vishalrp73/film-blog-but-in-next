import Image from 'next/image';
import { Search } from '../Search';
import julia from '../../lib/img/julia-fox.jpg';
import seal from '../../lib/img/golden-seal.png';
import * as styles from './Header.css';

const Header = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${julia.src})` }}
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
        <p>Welcome to my film blog - created using Next.js</p>
        <br />
        <p>NOW WITH HAND CRAFTED GRAPHICS!</p>
        <br />
      </div>
      <Search />
    </div>
  );
};

export default Header;
