import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxHeight: 600,
  display: 'flex',
  padding: '100px 0',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  color: 'white',
  borderBottom: '8px solid rgb(255, 0, 162)',
  transition: 'max-height 0.1s',
  transitionTimingFunction: 'ease-out',
});

export const smallContainer = style({
  maxHeight: 200,
  transition: 'max-height 0.4s',
  transitionTimingFunction: 'ease-in',
});

export const goldenSeal = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  '@media': {
    'screen and (max-width: 640px)': {
      width: 100,
      height: 100,
    },
  },
});

export const hamburgerContainer = style({
  position: 'fixed',
  top: 24,
  right: 24,
  zIndex: 1,
});

export const title = style({
  padding: 20,
  fontSize: 72,
  textAlign: 'center',
  borderRadius: 12,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: 48,
    },
    'screen and (max-width: 640px)': {
      fontSize: 32,
    },
    'screen and (max-width: 480px)': {
      fontSize: 24,
    },
  },
});

export const description = style({
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  margin: '30px 0',
  borderRadius: 12,
});

export const inputsContainer = style({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
});

export const btnGroup = style({
  marginTop: 20,
  display: 'flex',
});
