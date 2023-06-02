import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: '100vh',
  backgroundSize: 'cover',
});

export const container = style({
  width: '100%',
  display: 'flex',
  paddingTop: 120,
  paddingLeft: 24,
  paddingRight: 24,
  gap: 24,
});
