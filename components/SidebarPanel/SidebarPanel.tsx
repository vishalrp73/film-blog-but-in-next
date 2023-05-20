'use client';
import type { FC } from 'react';
import { useState } from 'react';
import CoolPanel from './CoolPanel';
import InfoPanel from './InfoPanel';
import * as styles from './SidebarPanel.css';
import { Film } from '@/lib/types';

type PanelTypes = 'COOL' | 'INFO';

const panels: { type: PanelTypes }[] = [{ type: 'COOL' }, { type: 'INFO' }];

interface Props {
  film: Film;
  randomTrivia: string;
}

const SidebarPanel: FC<Props> = ({ film, randomTrivia }) => {
  const [type, setType] = useState<PanelTypes>('COOL');
  const {
    year,
    trivia,
    review_score,
    comments,
    genre,
    writers,
    cinematography,
    soundtrack,
    notable_actors,
    blurb,
  } = film;

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        {panels.map((panel) => (
          <button
            type="button"
            onClick={() => setType(panel.type)}
            className={styles.panelBtn}
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
            review_score={review_score}
            comments={comments}
          />
        )}
        {type === 'INFO' && (
          <InfoPanel
            genre={genre}
            writers={writers}
            cinematography={cinematography}
            soundtrack={soundtrack}
            notable_actors={notable_actors}
            blurb={blurb}
          />
        )}
      </div>
    </div>
  );
};

export default SidebarPanel;
