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

export const popupContainer = style({
  position: 'absolute',
  zIndex: 50,
  width: 250,
  marginBottom: 275,
  borderRadius: 12,
  color: 'white',
  backgroundSize: 'cover',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});

export const popupContentContainer = style({
  display: 'flex',
  padding: 16,
  flexDirection: 'column',
  gap: 12,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'justify',
  width: '100%',
  height: 'fit-content',
});

export const title = style({
  textAlign: 'center',
});

export const blurb = style({
  textAlign: 'justify',
});
