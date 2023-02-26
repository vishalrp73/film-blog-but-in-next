import { style } from "@vanilla-extract/css";

export const container = style({
    backgroundColor: 'lightcoral',
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
});

export const filmPanel = style({
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'column',
})