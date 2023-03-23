import { style } from "@vanilla-extract/css";

export const carouselWrapper = style({
    overflow: 'hidden',
    height: 154,
    borderLeft: '10px solid rgb(225, 247, 230)',
    borderRight: '10px solid rgb(225, 247, 230)',
    borderStyle: 'double',
    borderRadius: 8,
});

export const carouselContainer = style({
    display: 'flex',
    gap: 16,
    paddingTop: 4,
});

export const btnContainer = style({
    position: 'relative',
    width: '100%',
    bottom: 45,
    display: 'flex',
    justifyContent: 'space-between',
});

export const btn = style({
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: 20,
    border: 'none',
    backgroundColor: 'rgb(25, 25, 25)',
    color: 'white',
    fontSize: 20,
    ':hover': {
        backgroundColor: 'rgb(50, 50, 50)',
        color: 'rgb(250, 0, 162)',
    }
});