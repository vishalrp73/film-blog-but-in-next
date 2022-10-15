import { style } from "@vanilla-extract/css";

export const panelContainer = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 12,
    border: '2px solid orangered',
    margin: 12,
});