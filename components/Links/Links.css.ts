import { style } from '@vanilla-extract/css';

// Category Link Styling
export const container = style({
  display: 'flex',
  gap: 16,
  color: 'white',
  fontSize: 40,
  textDecoration: 'none',
});

export const content = style({
  ':hover': {
    color: 'lightcoral',
  },
});

// Content Link Styling
export const link = style({
  textDecoration: 'none',
  height: 'max-content',
});

export const artistList = style({
  color: 'salmon',
  ':hover': {
    fontWeight: 'bold',
    color: 'gold',
  },
});

export const genreLink = style({
  color: 'goldenrod',
  ':hover': {
    fontWeight: 'bold',
    color: 'navy',
  },
});

export const categoryLink = style({
  color: 'neonpink',
  ':hover': {
    fontWeight: 'bold',
    color: 'green',
  },
});
