import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 16,
  color: 'white',
  fontSize: 40,
  textDecoration: 'none',
});

export const content = style({
  ':hover': {
    color: 'lightcoral',
  },
});
