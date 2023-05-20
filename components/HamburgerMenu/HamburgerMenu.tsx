import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useToggle from '@/lib/hooks/useToggle';
import HamburgerIcon from '../../lib/img/hamburger-icon.png';
import CrossIcon from '../../lib/img/cross.svg';
import * as styles from './HamburgerMenu.css';

const routes: { title: string; route: string }[] = [
  { title: 'Genres', route: '/genres' },
  { title: 'Categories', route: '/categories' },
  { title: 'Artists', route: '/artists' },
];

const HamburgerMenu: FC = () => {
  const [toggle, setToggle] = useToggle();
  return (
    <div className={styles.container}>
      <button type="button" onClick={setToggle} className={styles.btnContainer}>
        {toggle && (
          <Image src={CrossIcon} width={12} height={12} alt="close-menu" />
        )}
        {!toggle && (
          <Image src={HamburgerIcon} width={12} height={12} alt="open-menu" />
        )}
      </button>
      {toggle && (
        <div className={styles.menuDropdown}>
          {routes.map((route) => (
            <Link href={route.route} className={styles.menuLink}>
              <div className={styles.menuItem}>
                <h5 className={styles.menuText}>{route.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
