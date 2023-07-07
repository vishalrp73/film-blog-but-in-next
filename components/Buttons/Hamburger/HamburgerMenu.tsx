import { type FC } from 'react';
import { routes } from '@/lib/routes';
import { useToggle } from '@/lib/hooks';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerIcon from '@/lib/img/hamburger-icon.png';
import CrossIcon from '@/lib/img/cross.svg';
import * as styles from './HamburgerMenu.css';

const HamburgerMenu: FC = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={toggleOpen}
        className={styles.btnContainer}
      >
        {open && (
          <Image src={CrossIcon} width={12} height={12} alt="close-menu" />
        )}
        {!open && (
          <Image src={HamburgerIcon} width={12} height={12} alt="open-menu" />
        )}
      </button>
      {open && (
        <div className={styles.menuDropdown}>
          {routes.map((route) => (
            <Link
              key={route.route}
              href={route.route}
              className={styles.menuLink}
            >
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
