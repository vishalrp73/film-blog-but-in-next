'use client';
import { useState, type FC } from 'react';
import { Comment as CommentType } from '../../lib/types';
import Comment from './Comment';
import { translucent } from '@/styles/translucent.css';
import clsx from 'clsx';
import UserComment from './UserComment';
import * as styles from './Comments.css';

interface Props {
  comments: CommentType[];
  filmId: number;
}

const Comments: FC<Props> = ({ comments, filmId }) => {
  const [allComments, setAllComments] = useState<CommentType[]>(comments);
  return (
    <div className={clsx(styles.container, translucent)}>
      <UserComment
        filmId={filmId}
        comments={comments}
        setComments={setAllComments}
      />
      {allComments.map((comment) => (
        <Comment filmId={filmId} comment={comment} key={comment._id} />
      ))}
    </div>
  );
};

export default Comments;
