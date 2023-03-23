import type { FC } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { Film, Comment } from '../../lib/types';
import { postUpvote, postDownvote } from '../../handlers/request';
import * as styles from './Comment.css';

type Payload = {
  filmId: number;
  commentId: number;
};

interface CommentProps {
  film: Film;
  comment: Comment;
}

const convertDatetime = (timestamp: string): string => {
  return new Date(timestamp).toLocaleString();
};

const Comment: FC<CommentProps> = ({ film, comment }) => {
  const [upvotes, setUpvotes] = useState<number>(comment.upvotes);
  const [downvotes, setDownvotes] = useState<number>(comment.downvotes);

  const handleUpvote = (filmId: number, commentId: number): void => {
    const payload: Payload = {
      filmId,
      commentId,
    };
    postUpvote(payload);
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = (filmId: number, commentId: number): void => {
    const payload: Payload = {
      filmId,
      commentId,
    };
    postDownvote(payload);
    setDownvotes(downvotes - 1);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.voteContainer}>
        <button
          className={clsx(styles.voteBtn, styles.upvote)}
          onClick={() => handleUpvote(film.film_id, comment._id)}
        >
          ^
        </button>
        <button
          className={clsx(styles.voteBtn, styles.downvote)}
          onClick={() => handleDownvote(film.film_id, comment._id)}
        >
          ^
        </button>
        <p className={styles.calculatedRanking}>{upvotes - downvotes}</p>
      </div>
      <div className={styles.commentContentContainer}>
        <p className={styles.commentText}>{comment.comment_text}</p>
        <p className={styles.commentName}>{comment.name}</p>
        <p className={styles.commentTimestamp}>
          {convertDatetime(comment.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default Comment;
