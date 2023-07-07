import { type FC } from 'react';
import { useToggle } from '@/lib/hooks';
import clsx from 'clsx';
import { Film } from '@/lib/types';
import { getRandomNumber } from '@/lib/functions';
import Link from 'next/link';
import { translucent } from '@/styles/translucent.css';
import * as styles from './FilmTile.css';

type PopupProps = Pick<
  Film,
  'title' | 'year' | 'director' | 'blurb' | 'img_bank'
>;

const Popup = ({ title, year, director, blurb, img_bank }: PopupProps) => {
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

interface Props {
  film: Film;
  noAnimations?: boolean;
}

const FilmTile: FC<Props> = ({ film, noAnimations }) => {
  const [showPopup, togglePopup] = useToggle(false);
  const { film_id, thumbnail, title, year, director, blurb, img_bank } = film;

  return (
    <Link
      href={`/films/${film_id}`}
      onMouseEnter={togglePopup}
      onMouseLeave={togglePopup}
    >
      <div
        style={{ backgroundImage: `url(${thumbnail})` }}
        className={clsx(styles.panelContainer, {
          [styles.noPopupHover]: noAnimations,
        })}
      >
        {showPopup && noAnimations !== true && (
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
