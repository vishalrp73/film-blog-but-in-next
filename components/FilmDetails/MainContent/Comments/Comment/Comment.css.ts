import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 12,
  borderTop: '2px double white',
  borderBottom: '2px double white',
  gap: 8,
});

export const coreContainer = style({
  width: '100%',
  justifyContent: 'space-between',
  display: 'flex',
});

export const userCommentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 4,
});

export const userName = style({
  fontSize: 14,
});

export const timestamp = style({
  color: 'rgb(200, 200, 200)',
  fontSize: 12,
  fontStyle: 'italic',
});

export const commentText = style({
  paddingTop: 4,
});

export const voteContainer = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: 8,
});

export const negativeScore = style({
  color: 'red',
});

export const positiveScore = style({
  color: 'green',
});

export const voteBtn = style({
  backgroundColor: 'black',
  color: 'rgb(255, 0, 162)',
  borderRadius: 4,
  border: 'none',
  width: 30,
  height: 30,
  cursor: 'pointer',
  ':hover': {
    filter: 'brightness(2)',
  },
});
