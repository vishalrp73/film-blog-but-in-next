import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid white',
  borderRadius: 12,
  backgroundColor: 'black',
  padding: 12,
  gap: 8,
});

export const userInput = style({
  borderRadius: 4,
  border: '2px double white',
  minHeight: 60,
  backgroundColor: 'rgb(16, 16, 16)',
  color: '#ff00f9',
  padding: 8,
});

export const bottomRow = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const userName = style({
  backgroundColor: 'rgb(16, 16, 16)',
  border: '2px double white',
  borderRadius: 4,
  color: '#ff00f9',
  padding: 8,
});

export const submitBtn = style({
  width: 90,
  height: 45,
  borderRadius: 8,
  backgroundColor: 'rgb(225, 225, 225)',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 700,
  ':hover': {
    filter: 'brightness(0.5)',
    color: 'white',
  },
});

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
