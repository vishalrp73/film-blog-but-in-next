import { style } from '@vanilla-extract/css';

export const hideScrollbar = style({
  msOverflowStyle: 'none', // IE 10+ (lol)
  scrollbarWidth: 'none', // Firefox
  '::-webkit-scrollbar': {
    display: 'none', // Safari and Chrome
  },
});
