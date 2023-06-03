import { style } from '@vanilla-extract/css';

export const fixedHeaderContainer = style({
  position: 'fixed',
  zIndex: 50,
  display: 'flex',
  top: 24,
  left: 24,
});

export const miniSearchContainer = style({
  position: 'fixed',
  top: 24,
  right: 24,
  zIndex: 50,
});

export const headerContainer = style({
  position: 'fixed',
  top: 0,
  zIndex: 3,
  width: '100%',
  height: 80,
  display: 'flex',
  color: 'rgb(255, 0, 162)',
});

export const title = style({
  marginLeft: 40,
  textTransform: 'uppercase',
  fontStyle: 'oblique',
});
