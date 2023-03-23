import type { FC } from 'react';
import clsx from 'clsx';
import * as styles from './FilmDive.css';
import { getRandomNumber, sortCommentsByUpvotes } from '../../handlers/sort';
import { Film } from '../../lib/types';
import { ContentLink } from '../ContentLink';
import Comment from './Comment';
import { translucent } from '../../styles/translucent.css';

interface Props {
  film: Film;
}

const FilmDive: FC<Props> = ({ film }) => {
  const randomNumber: number = getRandomNumber(film.img_bank.length);
  const backingImage: string = film.img_bank[randomNumber];
  const reviewScore: number | string = film.review_score ?? '?';
  const reviewText: string =
    film.review_text !== '' ? film.review_text : 'GO AWAY';
  const comments = sortCommentsByUpvotes(film.comments);

  return (
    <div
      style={{ backgroundImage: `url(${backingImage})` }}
      className={styles.container}
    >
      <div className={styles.contentContainer}>
        <div className={styles.quickBar}>
          <div className={clsx(styles.genericPanel, translucent)}>
            <div className={styles.quickInfo}>
              <div className={styles.categoryList}>
                {film.special_category.map((category) => (
                  <ContentLink route="categories" content={category} />
                ))}
              </div>
              <div className={styles.reviewScoreContainer}>
                <h4 className={styles.reviewScore}>{reviewScore}</h4>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              styles.commentPanel,
              styles.genericPanel,
              translucent,
            )}
          >
            <h3 className={styles.commentHeading}>Comments</h3>
            {comments.map((comment) => (
              <Comment film={film} comment={comment} />
            ))}
          </div>
        </div>

        <div
          className={clsx(
            styles.reviewPanelContainer,
            styles.genericPanel,
            translucent,
          )}
        >
          <div className={styles.reviewTextContainer}>
            <p className={styles.reviewText}>{reviewText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDive;
