import { type FC, type Dispatch, type SetStateAction } from 'react';
import clsx from 'clsx';
import { Comment } from '@/lib/types';
import Display from '../Display';
import { useUserComment } from './useUserComment';
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
  const {
    setUserComment,
    setUserName,
    numInputWords,
    handlePostComment,
    isRequiredEmpty,
    hasPosted,
  } = useUserComment(filmId, comments, setComments);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.userInput}
        placeholder="* start typing ..."
        onChange={(e) => setUserComment(e.target.value)}
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
