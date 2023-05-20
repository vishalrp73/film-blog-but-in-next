import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 24,
  gap: 16,
});

export const trailerContainer = style({
  height: 320,
  backgroundColor: 'red',
});

export const videoTrailer = style({
  width: '100%',
  height: '100%',
});

export const banner = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 32px',
  borderRadius: 8,
});

export const bannerText = style({
  color: 'white',
  fontSize: 18,
});

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'max-content',
});

export const reviewContainer = style({
  height: '100%',
  maxHeight: 400,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  overflow: 'scroll',
  borderRadius: 12,
});

export const reviewHeader = style({
  color: 'white',
  fontSize: 28,
  textAlign: 'center',
});

export const reviewText = style({
  color: 'white',
  textAlign: 'justify',
});