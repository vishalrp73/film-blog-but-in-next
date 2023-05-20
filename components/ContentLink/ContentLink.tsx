import type { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import * as styles from './ContentLink.css';

interface Props {
  route: 'artists' | 'genres' | 'categories';
  content: string;
}

export const ContentLink: FC<Props> = ({ route, content }) => {
  return (
    <Link href={`/${route}/${encodeURIComponent(content)}`}>
      <p
        className={clsx(styles.link, {
          [styles.artistList]: route === 'artists',
          [styles.genreLink]: route === 'genres',
          [styles.categoryLink]: route === 'categories',
        })}
      >
        <span>{content}</span>
      </p>
    </Link>
  );
};
