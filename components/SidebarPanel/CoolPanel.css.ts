import { style } from '@vanilla-extract/css';

export const yearReviewContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: 60,
  margin: '0 auto',
});

export const yearContainer = style({
  width: '60%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue',
  borderRadius: 16,
});

export const year = style({
  color: 'salmon',
  fontSize: 32,
});

export const scoreContainer = style({
  width: 60,
  height: 60,
  borderRadius: '100%',
  display: 'flex',
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
});

export const score = style({
  color: 'white',
  fontSize: 32,
});
