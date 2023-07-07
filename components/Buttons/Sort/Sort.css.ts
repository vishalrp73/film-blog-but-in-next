import { style } from '@vanilla-extract/css';

export const sortBtn = style({
  height: 40,
  color: 'white',
  backgroundColor: 'rgb(40, 40, 40)',
  border: '3px double rgb(255, 255, 255)',
  borderRadius: 8,
  fontFamily: 'Fira Code, sans-serif',
  fontSize: 12,
  padding: '0 20px',
  cursor: 'pointer',
  WebkitBoxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.45)',
  boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.45)',

  ':hover': {
    border: '3px double rgb(255, 0, 162)',
    color: 'rgb(222, 222, 222)',
    backgroundColor: 'rgb(80, 80, 80)',
  },
  '@media': {
    'screen and (max-width: 375px)': {
      marginTop: 12,
    },
  },
});
