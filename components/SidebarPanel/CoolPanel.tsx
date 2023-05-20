import type { FC } from 'react';
import PanelContainer from './PanelContainer';
import { Comment } from '@/lib/types';
import Module from './Module';
import * as styles from './CoolPanel.css';
import { getRandomNumber } from '@/lib/functions';

interface Props {
  year: number;
  review_score: number | null;
  randomTrivia: string;
  comments: Comment[];
}

const CoolPanel: FC<Props> = ({
  year,
  review_score,
  randomTrivia,
  comments,
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

      <Module heading="trivia" content={randomTrivia} />
    </PanelContainer>
  );
};

export default CoolPanel;
