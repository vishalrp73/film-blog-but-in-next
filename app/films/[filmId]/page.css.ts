import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: '100vh',
  backgroundSize: 'cover',
});

export const fixedHeaderContainer = style({
  position: 'fixed',
  zIndex: 50,
  top: 26,
  left: 120,
});

export const headingTitle = style({
  color: 'white',
});

export const container = style({
  width: '100%',
  display: 'flex',
  paddingTop: 120,
  paddingLeft: 24,
  paddingRight: 24,
  gap: 24,
});

export const miniSearchContainer = style({
  position: 'fixed',
  top: 24,
  right: 24,
  zIndex: 50,
});
