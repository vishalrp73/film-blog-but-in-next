import dayjs from 'dayjs';
import { Comment } from '../types';

// format: Sun 13 Dec, 16:04
const DAYSJ_TIMESTAMP_FORMAT = 'ddd DD MMM YYYY @ HH:mm';

const generateCommentId = (comments: Comment[]): number => {
  if (comments.length === 0) return 1;

  const lastCommentId: number[] = comments.map(({ _id }) => _id).slice(-1);
  const lastId: number = lastCommentId[0];
  const iteratedId: number = lastId + 1;
  return iteratedId;
};

export const generateComment = (
  comments: Comment[],
  userName: string,
  commentText: string,
): Comment => {
  const generatedId: number = generateCommentId(comments);
  const timestamp = dayjs().format(DAYSJ_TIMESTAMP_FORMAT);
  return {
    _id: generatedId,
    name: userName,
    comment_text: commentText,
    timestamp,
    upvotes: 0,
    downvotes: 0,
  };
};
