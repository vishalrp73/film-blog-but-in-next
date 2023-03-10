import { style } from "@vanilla-extract/css";

export const container = style({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 80,
    margin: '0 auto auto auto',
});

export const heading = style({
    color: 'rgb(181, 213, 255)',
    textTransform: 'uppercase',
    fontStyle: 'oblique',
});

export const gridContainer = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    padding: '24px 0'
});

export const alignStart = style({
    justifyContent: 'flex-start',
});

export const alignCenter = style({
    justifyContent: 'center',
});