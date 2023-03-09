import { style } from "@vanilla-extract/css";

export const container = style({
    display: 'flex',
    flexDirection: 'column',
});

export const movieContainer = style({
    display: 'flex',
});

export const movie = style({
    width: 250,
    height: 75,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});