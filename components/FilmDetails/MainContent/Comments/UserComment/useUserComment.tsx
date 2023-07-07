import { useState, useMemo, type Dispatch, type SetStateAction } from 'react';
import { Comment } from '@/lib/types';
import { generateComment, postComment } from '@/lib/comments';
import { timeout } from '@/lib/functions';

export const useUserComment = (
  filmId: number,
  comments: Comment[],
  setComments: Dispatch<SetStateAction<Comment[]>>,
) => {
  const [userName, setUserName] = useState<string>('');
  const [userComment, setUserComment] = useState<string>('');
  const isRequiredEmpty = userName === '' || userComment === '';
  const [numInputWords, setNumInputWords] = useState<number>(0);
  const [hasPosted, setHasPosted] = useState<boolean | null>(null);

  useMemo(() => {
    if (userComment === '') {
      setNumInputWords(0);
      return;
    }
    setNumInputWords(
      userComment.split(' ').filter((word) => word !== '').length,
    );
  }, [userComment]);

  const handlePostComment = () => {
    const generatedUserComment: Comment = generateComment(
      comments,
      userName,
      userComment,
    );
    postComment(generatedUserComment, filmId, setHasPosted, setComments);
    timeout(setHasPosted, 5000);
  };

  return {
    setUserComment,
    setUserName,
    numInputWords,
    handlePostComment,
    isRequiredEmpty,
    hasPosted,
  };
};
