'use client';
import { useState, type FC } from 'react';
import clsx from 'clsx';
import { Comment as CommentType } from '@/lib/types';
import Comment from './Comment/Comment';
import UserComment from './UserComment';
import { translucent } from '@/styles/translucent.css';
import { hideScrollbar } from '@/styles/scroll.css';
import * as styles from './Comments.css';

interface Props {
  comments: CommentType[];
  filmId: number;
}

const Comments: FC<Props> = ({ comments, filmId }) => {
  const [allComments, setAllComments] = useState<CommentType[]>(comments);
  return (
    <div className={clsx(styles.container, translucent, hideScrollbar)}>
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
