import { style } from '@vanilla-extract/css';

export const postDisplayContainer = style({
  width: '100%',
  height: 30,
  borderRadius: 4,
  backgroundColor: '#286e28',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const errorDisplay = style({
  backgroundColor: '#9c1b1b',
});

export const displayText = style({
  color: 'white',
  fontSize: 12,
});
