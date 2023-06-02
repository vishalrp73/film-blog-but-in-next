import { style } from '@vanilla-extract/css';

export const gridContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  paddingTop: 40,
  margin: '0 auto',
});

export const container = style({
  width: '100%',
  paddingTop: 24,
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  gap: 16,
});

export const title = style({
  margin: '0 auto auto 40px',
});

export const genericGridContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: 40,
});
