import { style } from '@vanilla-extract/css';

export const wrapper = style({
  backgroundSize: 'cover',
});

export const container = style({
  width: '100%',
  display: 'flex',
  paddingTop: 120,
  paddingLeft: 120,
  paddingRight: 120,
  gap: 24,
});
