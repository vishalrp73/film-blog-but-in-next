import { style } from '@vanilla-extract/css';

export const fixedHeaderContainer = style({
  position: 'fixed',
  zIndex: 50,
  top: 26,
  left: 120,
});

export const container = style({
  width: '100%',
  display: 'flex',
  paddingTop: 80,
});

export const miniSearchContainer = style({
  position: 'fixed',
  top: 24,
  right: 24,
  zIndex: 50,
});
