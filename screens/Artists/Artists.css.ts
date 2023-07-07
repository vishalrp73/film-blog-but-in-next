import { style } from '@vanilla-extract/css';

export const container = style({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 68,
  margin: '0 auto',
  gap: 24,
  color: 'white',
});

export const artistsContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  justifyContent: 'space-evenly',
  gap: 8,
  paddingTop: 12,
});
