import type { FC } from 'react';
import { Comment } from '../../lib/types';
import * as styles from './Comments.css';
import { translucent } from '@/styles/translucent.css';
import clsx from 'clsx';

interface Props {
  comments: Comment[];
}

const Comments: FC<Props> = ({ comments }) => {
  const handleUpvote = () => console.log('upvote');
  const handleDownvote = () => console.log('downvote');

  return (
    <div className={clsx(styles.container, translucent)}>
      {comments.map((comment) => (
        <div className={styles.contentContainer} key={comment._id}>
          <div className={styles.headerContainer}>
            <div className={styles.commentContentHeader}>
              <p className={styles.commentAuthor}>{comment.name}</p>
              <p className={styles.commentTime}>
                {new Date(comment.timestamp).toUTCString()}
              </p>
            </div>
            <div className={styles.voteContainer}>
              <button
                type="button"
                onClick={handleUpvote}
                className={styles.voteBtn}
              >
                Upvote
              </button>
              <p className={styles.upvote}>{comment.upvotes}</p>
              <button
                type="button"
                onClick={handleDownvote}
                className={styles.voteBtn}
              >
                Downvote
              </button>
              <p className={styles.downvote}>{comment.downvotes}</p>
            </div>
          </div>
          <div className={styles.commentTextContainer}>
            <p className={styles.commentText}>{comment.comment_text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
