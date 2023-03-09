import { style } from "@vanilla-extract/css";

export const headerContainer = style({
    position: 'fixed',
    top: 0,
    zIndex: 3,
    width: '100%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(255, 0, 162)',
});

export const backBtn = style({
    textDecoration: 'none',
    marginLeft: 24,
});

export const title = style({
    marginLeft: 40,
    textTransform: 'uppercase',
    fontStyle: 'oblique',
});