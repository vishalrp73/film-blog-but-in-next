import { style } from '@vanilla-extract/css';
import { translucent } from '@/styles/translucent.css';

export const container = style({
  backgroundColor: translucent,
  padding: 24,
  maxHeight: 200,
  borderRadius: 12,
  overflow: 'scroll',
});

export const heading = style({
  color: 'white',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'justify',
});

export const contentText = style({
  color: 'white',
});
