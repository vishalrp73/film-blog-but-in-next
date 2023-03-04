import { style } from "@vanilla-extract/css"

export const miniContainer = style({
    width: '40%',
    height: 30,
    backgroundColor: 'silver',
    zIndex: 2,
});

export const closedContainer = style({
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 12,
});

export const closeBtn = style({
    backgroundColor: 'red',
});