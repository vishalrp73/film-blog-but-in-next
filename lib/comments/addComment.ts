import { Comment } from '../types';

export const addComment = async (comment: Comment, filmId: number) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  };

  return await fetch(
    `http://localhost:4000/addComment/${filmId}`,
    requestOptions,
  )
    .then((res) => {
      const { status } = res;
      if (status === 201) {
        return true;
      }
      return false;
    })
    .catch((err) => console.error('suka', err));
};
