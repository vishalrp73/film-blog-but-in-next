import { style } from "@vanilla-extract/css";

export const container = style({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
});

export const gridContainer = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
})