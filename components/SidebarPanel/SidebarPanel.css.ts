import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: 450,
});

export const navBar = style({
  display: 'flex',
  justifyContent: 'space-evenly',
  height: 45,
  width: '100%',
  gap: 8,
});

export const panelBtn = style({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000',
  color: '#FFF',
  borderRadius: 8,
  border: 'none',
  cursor: 'pointer',
  fontStyle: 'italic',
});

export const active = style({
  backgroundColor: 'pink',
  color: 'orangered',
  fontWeight: 'bold',
  fontStyle: 'normal',
});
