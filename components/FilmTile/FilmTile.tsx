import type { FC } from 'react';
import Link from 'next/link';
import * as styles from './FilmTile.css';

interface Props {
  id: number;
  thumbnail: string;
}

const FilmTile: FC<Props> = ({ id, thumbnail }) => {
  return (
    <Link href={`/films/${id}`} key={id}>
      <div
        style={{ backgroundImage: `url(${thumbnail})` }}
        className={styles.panelContainer}
      />
    </Link>
  );
};

export default FilmTile;
