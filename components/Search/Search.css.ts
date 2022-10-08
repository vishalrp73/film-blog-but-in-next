import { style } from '@vanilla-extract/css';

export const container = style({
    width: '75%',
    height: 35,
    padding: 12,
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const miniContainer = style({
    width: '40%',
    height: 30,
    backgroundColor: 'silver',
})