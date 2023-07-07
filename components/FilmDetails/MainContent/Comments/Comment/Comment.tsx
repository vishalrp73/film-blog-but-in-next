import { useState, useMemo, type FC } from 'react';
import clsx from 'clsx';
import { Comment as CommentType } from '@/lib/types';
import { handleVote } from '@/lib/comments';
import Display from '../Display';
import * as styles from './Comment.css';

type VoteScore = 'neutral' | 'negative' | 'positive';

interface Props {
  filmId: number;
  comment: CommentType;
}

const Comment: FC<Props> = ({ filmId, comment }) => {
  const { _id, name, comment_text, timestamp, upvotes, downvotes } = comment;
  const [votes, setVotes] = useState<number>(upvotes - downvotes);
  const [voteScore, setVoteScore] = useState<VoteScore>('neutral');
  const [didVoteSucceed, setDidVoteSucceed] = useState<boolean | null>(null);

  useMemo(() => {
    if (votes === 0) setVoteScore('neutral');
    if (votes < 0) setVoteScore('negative');
    if (votes > 0) setVoteScore('positive');
  }, [votes]);

  return (
    <div className={clsx(styles.container)}>
      <div className={styles.coreContainer}>
        <div className={styles.userCommentContainer}>
          <p className={styles.commentText}>{comment_text}</p>
          <h5 className={styles.userName}>
            {name}, <span className={styles.timestamp}>{timestamp}</span>
          </h5>
        </div>

        <div className={styles.voteContainer}>
          <span
            className={clsx({
              [styles.negativeScore]: voteScore === 'negative',
              [styles.positiveScore]: voteScore === 'positive',
            })}
          >
            {votes}
          </span>
          <button
            type="button"
            className={styles.voteBtn}
            onClick={() =>
              handleVote('up', filmId, _id, setVotes, setDidVoteSucceed)
            }
          >
            ↑
          </button>
          <button
            type="button"
            className={styles.voteBtn}
            onClick={() =>
              handleVote('down', filmId, _id, setVotes, setDidVoteSucceed)
            }
          >
            ↓
          </button>
        </div>
      </div>
      {didVoteSucceed !== null && (
        <Display
          isBoolean={didVoteSucceed}
          errorMessage="Unable to vote, please check your network connection"
          successMessage="Vote successful"
        />
      )}
    </div>
  );
};

export default Comment;
