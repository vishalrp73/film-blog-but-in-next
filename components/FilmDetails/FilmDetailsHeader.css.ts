import { style } from "@vanilla-extract/css";

export const headerContainer = style({
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
});

export const backBtn = style({
    textDecoration: 'none',
});

export const title = style({
    margin: 'auto',
})