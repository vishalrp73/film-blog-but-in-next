import { style } from '@vanilla-extract/css';

export const filterButtons = style({
  display: 'flex',
  gap: 12,
});

export const filterBtn = style({
  width: 45,
  height: 35,
  cursor: 'pointer',
  backgroundColor: 'crimson',
  borderRadius: 4,
  border: 'white',
  color: 'white',
  ':hover': {
    border: '2px double white',
  },
  ':active': {
    filter: 'brightness(2)',
  },
});

export const activeBtn = style({
  backgroundColor: '#500080',
});
