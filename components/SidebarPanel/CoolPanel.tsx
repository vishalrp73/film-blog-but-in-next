import { Comment } from '@/lib/types';
import type { FC } from 'react';
import StreamingOptions from './StreamingOptions';
import * as styles from './CoolPanel.css';
import Module from './Module';
import PanelContainer from './PanelContainer';

interface Props {
  year: number;
  review_score: number | null;
  blurb: string;
  randomTrivia: string;
  justWatchId: number;
}

const CoolPanel: FC<Props> = ({
  year,
  review_score,
  blurb,
  randomTrivia,
  justWatchId,
}) => {
  return (
    <PanelContainer>
      <div className={styles.yearReviewContainer}>
        <div className={styles.yearContainer}>
          <h5 className={styles.year}>{year}</h5>
        </div>
        <div className={styles.scoreContainer}>
          <h5 className={styles.score}>{review_score}</h5>
        </div>
      </div>
      <Module heading="blurb" content={blurb} />
      <Module heading="trivia" content={randomTrivia} />
      <StreamingOptions id={justWatchId} />
    </PanelContainer>
  );
};

export default CoolPanel;
