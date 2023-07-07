'use client';
import { useState, type FC } from 'react';
import clsx from 'clsx';
import { Film } from '@/lib/types';
import { CoolPanel, InfoPanel } from './Panels';
import RelatedFilms from './Related';
import * as styles from './Sidebar.css';

type PanelTypes = 'COOL' | 'INFO';
type Panels = { type: PanelTypes }[];

const panels: Panels = [{ type: 'COOL' }, { type: 'INFO' }];

interface Props {
  film: Film;
  randomTrivia: string;
}

const Sidebar: FC<Props> = ({ film, randomTrivia }) => {
  const [type, setType] = useState<PanelTypes>('COOL');
  const {
    film_id,
    year,
    review_score,
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
          <RelatedFilms filmId={film_id} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
