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

export const gridContainer = style({
  width: '100%',
  paddingTop: 24,
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  gap: 16,
});

export const filterButtons = style({
  display: 'flex',
  gap: 12,
});

export const centredButtons = style({
  justifyContent: 'center',
  paddingTop: 40,
});
