import { Dispatch, SetStateAction } from 'react';
import { Comment } from '../types';
import { addComment } from './addComment';

export const postComment = async (
  comment: Comment,
  filmId: number,
  setHasPosted: Dispatch<SetStateAction<boolean | null>>,
  setComments: Dispatch<SetStateAction<Comment[]>>,
) => {
  await addComment(comment, filmId)
    .then((res) => {
      if (!res) {
        setHasPosted(false);
        return;
      }

      setHasPosted(true);
      setComments((prev) => [...prev, comment]);
    })
    .catch((err) => console.error('suka', err));
};
