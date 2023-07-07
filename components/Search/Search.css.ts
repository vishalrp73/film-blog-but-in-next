import { style } from '@vanilla-extract/css';

export const searchInput = style({
  width: '100%',
  height: 50,
  padding: 20,
  backgroundColor: '#0C0C0C',
  border: '2px ridge rgb(255, 0, 162)',
  borderRadius: 5,
  color: 'rgb(255, 0, 162)',
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 600,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
});
