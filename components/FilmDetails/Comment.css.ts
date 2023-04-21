import { style } from '@vanilla-extract/css';

export const comment = style({
  display: 'flex',
  width: '95%',
  border: '2px double white',
  gap: 12,
  padding: 12,
  borderRadius: 12,
  margin: '10px auto',
  '::-webkit-scrollbar': {},
  '::-webkit-scrollbar-thumb': {
    width: 8,
    backgroundColor: 'red',
  },
});

export const voteContainer = style({
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const voteBtn = style({
  width: 30,
  height: 30,
  borderRadius: '100%',
  border: '1px solid rgb(250, 0, 162)',
  backgroundColor: 'rgb(10, 10, 10)',
});

export const upvote = style({
  color: 'green',
  cursor: 'n-resize',
});

export const calculatedRanking = style({
  textAlign: 'center',
  fontWeight: 'bolder',
});

export const downvote = style({
  cursor: 's-resize',
  transform: 'rotate(180deg)',
  color: 'red',
});

export const commentContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const commentText = style({
  textAlign: 'justify',
});

export const commentName = style({
  color: 'rgb(255, 0, 162)',
  fontWeight: 'bold',
  fontStyle: 'oblique',
  textTransform: 'uppercase',
});

export const commentTimestamp = style({
  fontSize: 12,
  fontStyle: 'italic',
});
