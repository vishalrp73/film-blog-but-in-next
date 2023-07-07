'use client';
import { useState, type FC } from 'react';
import { Categories } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import * as styles from './Links.css';

interface Props {
  route: Categories;
  content: string;
}

export const CategoryLink: FC<Props> = ({ route, content }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Link
      href={`/${route}/${encodeURIComponent(content)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.container}>
        {isHovered && '>>'}
        <p className={styles.content}>{content}</p>
      </div>
    </Link>
  );
};

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
