import type { FC } from 'react';
import * as styles from './FilmDive.css';
import { getRandomNumber } from '../../handlers/sort';
import { Film } from '../../lib/types';
import { ContentLink } from '../ContentLink';

interface Props {
  film: Film;
}

const FilmDive: FC<Props> = ({ film }) => {
  const randomNumber: number = getRandomNumber(film.img_bank.length);
  const backingImage: string = film.img_bank[randomNumber];
  const reviewScore: number | string =
    film.review_score ?? "I HAVEN'T REVIEWED THIS YET";

  const reviewText: string =
    film.review_text !== '' ? film.review_text : 'GO AWAY';

  return (
    <div
      style={{ backgroundImage: `url(${backingImage})` }}
      className={styles.container}
    >
      <div className={styles.reviewPanelContainer}>
        <div className={styles.reviewScore}>{reviewScore}</div>
        <div className={styles.reviewText}>{reviewText}</div>
        <div className={styles.categories}>
          {film.special_category.map((category) => (
            <ContentLink route="categories" content={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmDive;
