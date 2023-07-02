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

export const detailsContainer = style({
  display: 'flex',
  gap: 12,
});

export const numWordsContainer = style({
  width: 90,
  backgroundColor: 'rgb(200, 200, 200)',
  borderRadius: 8,
  padding: 12,
  textAlign: 'center',
});

export const numWordsText = style({
  fontSize: 14,
  color: 'black',
  fontWeight: '900',
});

export const submitBtn = style({
  width: 90,
  height: 45,
  borderRadius: 8,
  backgroundColor: 'rgb(225, 225, 225)',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 700,
  selectors: {
    '&:hover::enabled': {
      filter: 'brightness(0.5)',
      color: 'white',
    },
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
