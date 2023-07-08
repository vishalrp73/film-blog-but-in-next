'use client';
import { type FC } from 'react';
import { Artists, Film } from '@/lib/types';
import { ContentLink } from '@/components/Links';
import { FixedHeader } from '@/components/Header';
import * as styles from './Artists.css';

interface Props {
  films: Film[];
  artists: Artists;
}

const ArtistsPage: FC<Props> = ({ films, artists }) => {
  return (
    <section>
      <FixedHeader films={films} title="Artists" />
      <div className={styles.container}>
        {Object.entries(artists).map((category) => (
          <div key={category[0]}>
            <h3>{category[0]}</h3>
            <div className={styles.artistsContainer}>
              {category[1].map((artist) => (
                <ContentLink key={artist} route="artists" content={artist} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsPage;
