import { globalStyle, style } from '@vanilla-extract/css';
import { hideScrollbar } from './scroll.css';

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  fontFamily: 'Arial, Helvetica, sans-serif',
});

globalStyle('html, body', {
  backgroundColor: 'rgb(10, 10, 10)',
});

export const all = style([hideScrollbar]);
