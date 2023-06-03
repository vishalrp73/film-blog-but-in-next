import type { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Categories } from '@/lib/types';
import * as styles from './ContentLink.css';

interface Props {
  route: Categories;
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
