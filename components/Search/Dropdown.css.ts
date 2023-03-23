import { style } from "@vanilla-extract/css";

export const completeContainer = style({
    display: 'flex',
    width: '100%',
});

export const container = style({
    width: '100%',
    maxHeight: 500,
    overflow: 'scroll',             
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 12,
    border: '1px solid white',
});

export const filmPanel = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px 10px 10px',
    gap: 8,
    color: 'rgb(250, 0, 162)',
    textDecoration: 'none',
    borderBottom: '1px solid white',
    ':last-child': {
        borderBottom: 'none',
    },
    ':hover': {
        color: 'orangered'
    }
});
