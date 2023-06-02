import { style } from '@vanilla-extract/css';

export const panelContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 275,
  height: 140,
  borderRadius: 12,
  backgroundSize: 'cover',
  border: '2px solid orangered',
  ':hover': {
    zoom: '1.05',
  },
});
