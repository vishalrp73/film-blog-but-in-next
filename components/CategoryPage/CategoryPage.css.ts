import { style } from '@vanilla-extract/css';

export const container = style({
  width: '75%',
  maxHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 32,
  margin: '0 auto',
  paddingTop: 120,
});
