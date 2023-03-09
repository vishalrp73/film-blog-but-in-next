import type { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import * as styles from './ContentLink.css';

interface Props {
  route: 'artist' | 'genres' | 'categories';
  content: string;
}

export const ContentLink: FC<Props> = ({ route, content }) => {
  return (
    <Link href={`/${route}/${encodeURIComponent(content)}`}>
      <a
        className={clsx(styles.link, {
          [styles.artistList]: route === 'artist',
          [styles.genreLink]: route === 'genres',
          [styles.categoryLink]: route === 'categories',
        })}
      >
        <span>{content}</span>
      </a>
    </Link>
  );
};
