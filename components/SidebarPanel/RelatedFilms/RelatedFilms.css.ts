import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const maxHeight = style({
  maxHeight: 600,
});

export const heading = style({
  color: 'white',
});
