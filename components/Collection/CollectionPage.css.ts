import { style } from "@vanilla-extract/css";

export const container = style({
    height: '92vh', // 92vh because Footer is 8vh
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(15, 15, 15)',
});

export const filmsContainer = style({
    height: 'max-content',
    padding: '120px 24px 0 24px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 16,
});