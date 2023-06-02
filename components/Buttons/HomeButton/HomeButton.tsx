import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '../../../lib/img/home-icon.png';
import * as styles from './HomeButton.css';

const HomeButton = () => {
  return (
    <Link href="/">
      <button type="button" className={styles.homeBtn}>
        <Image src={HomeIcon} alt="home" width={28} />
      </button>
    </Link>
  );
};

export default HomeButton;
