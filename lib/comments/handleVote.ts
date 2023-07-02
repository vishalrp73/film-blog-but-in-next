import { Dispatch, SetStateAction } from 'react';
import { timeout } from '../functions';

const upvote = async (filmId: number, commentId: number) => {
  return await fetch(`http://localhost:4000/upvote/${filmId}/${commentId}`)
    .then((res) => {
      const { status } = res;
      if (status === 201) {
        return true;
      }
      return false;
    })
    .catch((err) => console.error('blyat', err));
};

const downvote = async (filmId: number, commentId: number) => {
  return await fetch(`http://localhost:4000/downvote/${filmId}/${commentId}`)
    .then((res) => {
      const { status } = res;
      if (status === 201) {
        return true;
      }
      return false;
    })
    .catch((err) => console.error('fuck', err));
};

export const handleVote = async (
  type: 'up' | 'down',
  filmId: number,
  _id: number,
  setVotes: Dispatch<SetStateAction<number>>,
  setSuccessfulVote: Dispatch<SetStateAction<boolean | null>>,
) => {
  const isSuccessful =
    type === 'up' ? await upvote(filmId, _id) : await downvote(filmId, _id);
  isSuccessful ? setSuccessfulVote(true) : setSuccessfulVote(false);
  setVotes((prev) => (type === 'up' ? prev + 1 : prev - 1));
  timeout(setSuccessfulVote, 5000);
};
