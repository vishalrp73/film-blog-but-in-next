import { style } from "@vanilla-extract/css";

export const container = style({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    paddingTop: 40,
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

export const categoryContainer = style({
    padding: '20px 0',
});

export const categoryHeading = style({
    fontSize: 24,
    paddingBottom: 8,
    fontStyle: 'oblique',
    textTransform: 'uppercase',
    color: 'Highlight',
});

export const heading = style({
    color: 'rgb(181, 213, 255)',
    textTransform: 'uppercase',
    fontStyle: 'oblique',
});