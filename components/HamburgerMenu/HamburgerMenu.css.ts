import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

export const btnContainer = style({
  width: 45,
  height: 45,
  borderRadius: 4,
  border: 'none',
  backgroundColor: 'rgb(250, 3, 162)',
});

export const menuDropdown = style({
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  paddingTop: 12,
});

export const menuItem = style({
  height: 35,
  paddingLeft: 16,
  paddingRight: 16,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'rgb(12, 12, 12)',
  border: '2px ridge white',
  borderRadius: 8,
  ':hover': {
    filter: 'brightness(0.5)',
  },
});

export const menuLink = style({
  textDecoration: 'none',
});

export const menuText = style({
  fontSize: 16,
  color: 'white',
});
