import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { Film } from '../../lib/types';
import ArtistLink from '../Artists/ArtistLink';
import * as styles from './PreviewView.css';
import { translucent } from '../../styles/translucent.css';

interface PanelProps {
  children: ReactNode;
}

const OuterPanel: FC<PanelProps> = ({ children }) => {
  return <div className={styles.outerPanel}>{children}</div>;
};

const InnerPanel: FC<PanelProps> = ({ children }) => {
  return <div className={styles.innerPanel}>{children}</div>;
};

interface Props {
  film: Film;
}

const PreviewView: FC<Props> = ({ film }) => {
  const actors = film.notable_actors.join(', ');
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.iFrameContainer}>
        <iframe
          src={
            film.trailer +
            `?&amp;rel=0&amp;autoplay=1&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`
          }
          allowFullScreen
          title="video"
          frameBorder="0"
          className={styles.trailer}
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className={clsx(styles.infoPanel, translucent)}>
        {film && (
          <>
            {/* 1 */}
            <OuterPanel>
              <p className={styles.heading}>Genres</p>
              {film.genre.map((genre) => (
                <span>{genre}</span>
              ))}
            </OuterPanel>
            {/* 2 */}
            <InnerPanel>
              <a
                onClick={() =>
                  router.push(`/artist/${encodeURIComponent(film.director)}`)
                }
              >
                <p>Directed by {film.director}</p>
              </a>
            </InnerPanel>
            {/* 3 */}
            <OuterPanel>
              <div className={styles.runtimeYear}>
                <span>runtime: {film.runtime}</span>
                <span>released in{film.year}</span>
              </div>
            </OuterPanel>
            {/* 4 */}
            <OuterPanel>
              <p className={styles.heading}>Soundtrack</p>
              {film.soundtrack.map((artist) => (
                <ArtistLink artist={artist} />
              ))}
            </OuterPanel>
            {/* 5 */}
            <InnerPanel>
              <p className={styles.heading}>Notable actors</p>
              {film.notable_actors.map((actor) => (
                <ArtistLink artist={actor} />
              ))}
            </InnerPanel>
            {/* 6 */}
            <OuterPanel>
              <p className={styles.heading}>Writers</p>
              {film.writers.map((writer) => (
                <span>{writer}</span>
              ))}
            </OuterPanel>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviewView;
