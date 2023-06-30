import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 24,
  borderRadius: 12,
  overflow: 'scroll',
});

export const childrenContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const heading = style({
  color: 'white',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'justify',
});

export const contentText = style({
  color: 'white',
});
