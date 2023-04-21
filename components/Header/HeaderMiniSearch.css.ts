import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  position: 'fixed',
  top: 0,
  zIndex: 3,
  width: '100%',
  height: 80,
  display: 'flex',
  alignItems: 'center',
  color: 'rgb(255, 0, 162)',
});

export const backBtn = style({
  cursor: 'pointer',
  width: 70,
  padding: '5px 0',
  textDecoration: 'none',
  marginLeft: 24,
  backgroundColor: 'white',
  border: '2px double rgb(250, 0, 162)',
  borderRadius: 12,
});

export const title = style({
  marginLeft: 40,
  textTransform: 'uppercase',
  fontStyle: 'oblique',
});
