import { style } from '@vanilla-extract/css';

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
