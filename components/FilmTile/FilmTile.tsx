import type { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Film } from '@/lib/types';
import { getRandomNumber } from '@/lib/functions';
import * as styles from './FilmTile.css';
import { translucent } from '@/styles/translucent.css';

interface PopupProps {
  title: string;
  year: number;
  director: string;
  blurb: string;
  img_bank: string[];
}

const Popup: FC<PopupProps> = ({ title, year, director, blurb, img_bank }) => {
  const randomNumber = getRandomNumber(img_bank.length);
  return (
    <div
      style={{ backgroundImage: `url(${img_bank[randomNumber]})` }}
      className={clsx(styles.popupContainer, translucent)}
    >
      <div className={clsx(styles.popupContentContainer, translucent)}>
        <h3 className={styles.title}>{title}</h3>
        <p>{year}</p>
        <p>{director}</p>
        <p className={styles.blurb}>{blurb}</p>
      </div>
    </div>
  );
};

const FilmTile: FC<{ film: Film }> = ({ film }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { film_id, thumbnail, title, year, director, blurb, img_bank } = film;

  return (
    <Link
      href={`/films/${film_id}`}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <div
        style={{ backgroundImage: `url(${thumbnail})` }}
        className={styles.panelContainer}
      >
        {showPopup && (
          <Popup
            title={title}
            year={year}
            director={director}
            blurb={blurb}
            img_bank={img_bank}
          />
        )}
      </div>
    </Link>
  );
};

export default FilmTile;
