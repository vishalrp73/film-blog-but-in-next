import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { Film } from '../../lib/types';
import { ContentLink } from '../ContentLink';
import * as styles from './PreviewView.css';
import { translucent } from '../../styles/translucent.css';

interface PanelProps {
  type: 'inner' | 'outer';
  children: ReactNode;
}

const Panel: FC<PanelProps> = ({ type, children }) => {
  return (
    <div
      className={clsx({
        [styles.innerPanel]: type === 'inner',
        [styles.outerPanel]: type === 'outer',
      })}
    >
      {children}
    </div>
  );
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
            `?&amp;rel=0&amp;autoplay=0&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`
          }
          allowFullScreen
          title="video"
          frameBorder="0"
          className={styles.trailer}
        />
      </div>
      <div className={clsx(styles.infoPanel, translucent)}>
        {film && (
          <>
            {/* 1 */}
            <Panel type="outer">
              <p className={styles.heading}>Genres</p>
              {film.genre.map((genre) => (
                <ContentLink route="genres" content={genre} />
              ))}
            </Panel>
            {/* 2 */}
            <Panel type="inner">
              <p>
                Directed by&nbsp;
                <ContentLink route="artist" content={film.director} />
              </p>
            </Panel>
            {/* 3 */}
            <Panel type="outer">
              <div className={styles.runtimeYear}>
                <span>runtime: {runtime}</span>
                <span>released in: {film.year}</span>
              </div>
            </Panel>
            {/* 4 */}
            <Panel type="outer">
              <p className={styles.heading}>Soundtrack</p>
              {film.soundtrack.map((artist) => (
                <ContentLink route="artist" content={artist} />
              ))}
            </Panel>
            {/* 5 */}
            <Panel type="inner">
              <p className={styles.heading}>Notable actors</p>
              {film.notable_actors.map((actor) => (
                <ContentLink route="artist" content={actor} />
              ))}
            </Panel>
            {/* 6 */}
            <Panel type="outer">
              <p className={styles.heading}>Writers</p>
              {film.writers.map((writer) => (
                <ContentLink route="artist" content={writer} />
              ))}
            </Panel>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviewView;
