import type { Dispatch, FC, SetStateAction } from 'react';
import { useState } from 'react';
import { postComment, generateComment } from '@/lib/comments';
import { Comment } from '@/lib/types';
import * as styles from './UserComment.css';
import clsx from 'clsx';
import Display from './Display';
import { timeout } from '@/lib/functions';

interface Props {
  filmId: number;
  comments: Comment[];
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

const UserComment: FC<Props> = ({ filmId, comments, setComments }) => {
  const [userName, setUserName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [hasPosted, setHasPosted] = useState<boolean | null>(null);

  const handlePostComment = () => {
    const userComment: Comment = generateComment(comments, userName, comment);
    postComment(userComment, filmId, setHasPosted, setComments);
    timeout(setHasPosted, 5000);
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.userInput}
        placeholder="start typing ..."
        onChange={(e) => setComment(e.target.value)}
      />
      <div className={styles.bottomRow}>
        <input
          type="text"
          className={styles.userName}
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          type="button"
          className={clsx(styles.submitBtn)}
          onClick={handlePostComment}
        >
          submit
        </button>
      </div>
      {hasPosted !== null && (
        <Display
          isBoolean={hasPosted}
          errorMessage="Unable to post your comment. Check your network connection"
          successMessage="Successfully posted your comment"
        />
      )}
    </div>
  );
};

export default UserComment;
