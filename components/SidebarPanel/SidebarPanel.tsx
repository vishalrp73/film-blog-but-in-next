'use client';
import type { FC } from 'react';
import { useState } from 'react';
import CoolPanel from './CoolPanel';
import InfoPanel from './InfoPanel';
import * as styles from './SidebarPanel.css';
import { Film } from '@/lib/types';
import clsx from 'clsx';
import RelatedFilms from './RelatedFilms';

type PanelTypes = 'COOL' | 'INFO';

const panels: { type: PanelTypes }[] = [{ type: 'COOL' }, { type: 'INFO' }];

interface Props {
  film: Film;
  randomTrivia: string;
}

const SidebarPanel: FC<Props> = ({ film, randomTrivia }) => {
  const [type, setType] = useState<PanelTypes>('COOL');
  const {
    title,
    year,
    review_score,
    comments,
    genre,
    writers,
    cinematography,
    soundtrack,
    notable_actors,
    blurb,
    justWatchId,
  } = film;

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        {panels.map((panel) => (
          <button
            key={panel.type}
            type="button"
            onClick={() => setType(panel.type)}
            className={clsx(styles.panelBtn, {
              [styles.active]: type === panel.type,
            })}
          >
            {panel.type}
          </button>
        ))}
      </div>
      <div style={{ paddingTop: 12 }}>
        {type === 'COOL' && (
          <CoolPanel
            year={year}
            randomTrivia={randomTrivia}
            blurb={blurb}
            review_score={review_score}
            comments={comments}
            justWatchId={justWatchId}
          />
        )}
        {type === 'INFO' && (
          <InfoPanel
            genre={genre}
            writers={writers}
            cinematography={cinematography}
            soundtrack={soundtrack}
            notable_actors={notable_actors}
          />
        )}
        <div style={{ paddingTop: 16 }}>
          <RelatedFilms title={title} />
        </div>
      </div>
    </div>
  );
};

export default SidebarPanel;
