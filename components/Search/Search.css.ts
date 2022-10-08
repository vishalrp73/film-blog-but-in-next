import { style } from '@vanilla-extract/css';

export const container = style({
    width: '75%',
    margin: '0 auto',
    height: 35,
    backgroundColor: 'lightblue',
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
});

export const searchInput = style({
    width: '100%',
    height: 35,
});