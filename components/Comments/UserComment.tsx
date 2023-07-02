import {
  type FC,
  type Dispatch,
  type SetStateAction,
  useState,
  useMemo,
} from 'react';
import clsx from 'clsx';
import { Comment } from '@/lib/types';
import { postComment, generateComment } from '@/lib/comments';
import { timeout } from '@/lib/functions';
import Display from './Display';
import * as styles from './UserComment.css';

const errorMessage =
  'Unable to post your comment. Check your network connection';
const successMessage = 'Successfully posted your comment';

interface Props {
  filmId: number;
  comments: Comment[];
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

const UserComment: FC<Props> = ({ filmId, comments, setComments }) => {
  const [userName, setUserName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const isRequiredEmpty = userName === '' || comment === '';
  const [numInputWords, setNumInputWords] = useState<number>(0);
  const [hasPosted, setHasPosted] = useState<boolean | null>(null);

  useMemo(() => {
    if (comment === '') {
      setNumInputWords(0);
      return;
    }
    const numberOfWords = comment
      .split(' ')
      .filter((word) => word !== '').length;
    setNumInputWords(numberOfWords);
  }, [comment]);

  const handlePostComment = () => {
    const userComment: Comment = generateComment(comments, userName, comment);
    postComment(userComment, filmId, setHasPosted, setComments);
    timeout(setHasPosted, 5000);
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.userInput}
        placeholder="* start typing ..."
        onChange={(e) => setComment(e.target.value)}
      />
      <div className={styles.bottomRow}>
        <input
          type="text"
          className={styles.userName}
          placeholder="* name"
          onChange={(e) => setUserName(e.target.value)}
        />

        <div className={styles.detailsContainer}>
          <div className={styles.numWordsContainer}>
            <span className={styles.numWordsText}>{numInputWords} words</span>
          </div>
          <button
            type="button"
            className={clsx(styles.submitBtn)}
            onClick={handlePostComment}
            disabled={isRequiredEmpty}
          >
            submit
          </button>
        </div>
      </div>
      {hasPosted !== null && (
        <Display
          isBoolean={hasPosted}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
      )}
    </div>
  );
};

export default UserComment;
