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
});

export const panelBtn = style({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
