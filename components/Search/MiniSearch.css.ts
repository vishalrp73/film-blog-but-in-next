import { style } from '@vanilla-extract/css';

export const superMaxContainer /*ᵀᴹ*/ = style({
  width: '50%',
  display: 'flex',
  flexDirection: 'row-reverse',
  position: 'absolute',
  top: 16,
  right: 24,
  backgroundSize: 'cover',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  borderRadius: 12,
});

export const miniContainer = style({
  width: '50%',
  display: 'flex',
  height: '80%',
  flexDirection: 'column',
  zIndex: 2,
});

export const searchContainer = style({
  display: 'flex',
  gap: 4,
  alignItems: 'center',
});

export const resetBtn = style({
  background: 'rgb(255, 0, 162)',
  cursor: 'pointer',
  border: '2px ridge rgb(200, 200, 200)',
  borderRadius: 5,
  height: 42,
});

export const input = style({
  width: '100%',
  height: 40,
  padding: 20,
  backgroundColor: '#0C0C0C',
  border: '2px ridge rgb(255, 0, 162)',
  borderRadius: 5,
  color: 'rgb(255, 0, 162)',
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 600,
});

export const functionalGroup = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 0',
});

export const openSearchBtn = style({
  width: 45,
  height: 45,
  borderRadius: 12,
  position: 'absolute',
  right: 24,
  cursor: 'pointer',
  border: '1px ridge rgb(250, 0, 126)',
});

export const dropdownContainer = style({
  width: '100%',
});

export const closeBtn = style({
  backgroundColor: 'black',
  height: 45,
  width: 50,
  color: 'white',
  borderRadius: 12,
  border: '1px ridge rgb(255, 0, 162)',
  margin: 'auto 0 auto auto',
  cursor: 'pointer',
});
