import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 16,
  paddingBottom: 16,
});

export const menuContainer = style({
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 24,
  paddingBottom: 16,
});

export const filterButtons = style({
  display: 'flex',
  gap: 12,
});

export const gridContainer = style({
  width: '100%',
  paddingTop: 24,
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  gap: 16,
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

export const centredButtons = style({
  justifyContent: 'center',
  paddingTop: 40,
});

export const activeBtn = style({
  backgroundColor: '#500080',
});
