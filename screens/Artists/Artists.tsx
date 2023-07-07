import { type FC } from 'react';
import { Artists, Film } from '@/lib/types';
import { randomiseStrings } from '@/lib/functions';
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
          <div>
            <h3>{category[0]}</h3>
            <div className={styles.artistsContainer}>
              {randomiseStrings(category[1]).map((artist) => (
                <ContentLink route="artists" content={artist} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsPage;
