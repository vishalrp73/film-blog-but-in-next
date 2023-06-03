import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 24,
  maxHeight: 400,
  borderRadius: 12,
  overflow: 'scroll',
  color: 'white',
});

export const contentContainer = style({
  //   backgroundColor: 'red',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const commentContentHeader = style({
  display: 'flex',
  flexDirection: 'column',
});

export const commentAuthor = style({});

export const voteContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const voteBtn = style({});

export const upvote = style({});
export const downvote = style({});

export const commentTextContainer = style({
  paddingTop: 4,
});

export const commentText = style({});

export const commentTime = style({
  paddingTop: 8,
});
