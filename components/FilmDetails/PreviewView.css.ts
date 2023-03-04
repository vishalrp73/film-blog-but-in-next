import { style } from "@vanilla-extract/css";

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    height: '95%',
    margin: 'auto',
    marginTop: 25,
    gap: 25,
});

export const iFrameContainer = style({
    width: '100%',
    height: '100%',
});

export const trailer = style({
    width: '100%',
    height: '100%',
    margin: 'auto',
    borderRadius: 8,
});

export const infoPanel = style({
    width: '100%', 
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridColumnGap: 0,
    gridRowGap: 0,
    border: '5px solid salmon',
    borderRadius: 8,
    backgroundColor: 'rgb(50, 50, 50)',
    color: 'white',
});

export const outerPanel = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

export const innerPanel = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: 'auto'
});

export const runtimeYear = style({
    display: 'flex',
    flexDirection: 'column',
});

export const heading = style({
    color: 'pink',
});