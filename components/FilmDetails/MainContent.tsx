import type { FC } from 'react';
import { Film } from '@/lib/types';
import clsx from 'clsx';
import Comments from '../Comments/Comments';
import { ContentLink } from '../ContentLink/ContentLink';
import { translucent } from '@/styles/translucent.css';
import { hideScrollbar } from '@/styles/scroll.css';
import * as styles from './MainContent.css';

interface Props {
  film: Film;
}

const MainContent: FC<Props> = ({ film }) => {
  const {
    film_id,
    trailer,
    runtime,
    director,
    special_category,
    headline,
    review_text,
    comments,
  } = film;
  return (
    <div className={styles.container}>
      <div className={styles.trailerContainer}>
        <iframe
          className={styles.videoTrailer}
          src={
            trailer +
            `?&amp;rel=0&amp;autoplay=0&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`
          }
          allowFullScreen
          title="video"
          frameBorder="0"
        />
      </div>

      <div className={clsx(styles.banner, translucent)}>
        <h5 className={styles.bannerText}>{runtime}</h5>
        <ContentLink route="artists" content={director} />
        <div className={styles.categoryContainer}>
          {special_category.map((category) => (
            <ContentLink route="categories" content={category} />
          ))}
        </div>
      </div>

      <div className={clsx(styles.reviewContainer, translucent, hideScrollbar)}>
        <h3 className={styles.reviewHeader}>{headline}</h3>
        <p className={styles.reviewText}>{review_text}</p>
      </div>
      <Comments comments={comments} filmId={film_id} />
    </div>
  );
};

export default MainContent;
