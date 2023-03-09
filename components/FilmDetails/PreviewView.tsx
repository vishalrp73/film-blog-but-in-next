import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { Film } from '../../lib/types';
import { ContentLink } from '../ContentLink';
import { getRandomNumber } from '../../handlers/sort';
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
  const runTimeSplit = film.runtime.split(':');
  const runtime = `${runTimeSplit[0]} hr ${runTimeSplit[1]} mins`;

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
                <ContentLink route="genres" content={genre} />
              ))}
            </OuterPanel>
            {/* 2 */}
            <InnerPanel>
              <p>
                Directed by&nbsp;
                <ContentLink route="artist" content={film.director} />
              </p>
            </InnerPanel>
            {/* 3 */}
            <OuterPanel>
              <div className={styles.runtimeYear}>
                <span>runtime: {runtime}</span>
                <span>released in: {film.year}</span>
              </div>
            </OuterPanel>
            {/* 4 */}
            <OuterPanel>
              <p className={styles.heading}>Soundtrack</p>
              {film.soundtrack.map((artist) => (
                <ContentLink route="artist" content={artist} />
              ))}
            </OuterPanel>
            {/* 5 */}
            <InnerPanel>
              <p className={styles.heading}>Notable actors</p>
              {film.notable_actors.map((actor) => (
                <ContentLink route="artist" content={actor} />
              ))}
            </InnerPanel>
            {/* 6 */}
            <OuterPanel>
              <p className={styles.heading}>Writers</p>
              {film.writers.map((writer) => (
                <ContentLink route="artist" content={writer} />
              ))}
            </OuterPanel>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviewView;
