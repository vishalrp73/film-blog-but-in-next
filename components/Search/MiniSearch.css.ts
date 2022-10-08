import { style } from "@vanilla-extract/css"

export const closedContainer = style({
    position: 'absolute',
    top: 5,
    right: 16,
    width: 50,
    height: 50,
    backgroundColor: 'green',
    border: 'none',
    color: 'white',
    borderRadius: 12,
});

export const miniContainer = style({
    position: 'relative',
    margin: '0 auto',
    width: '100%',
    backgroundColor: 'silver',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '50%',
        }
    }
});

export const miniInputContainer = style({
    width: '100%',
    height: 35,
    backgroundColor: 'silver',
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
});

export const searchInput = style({
    width: '40%',
});

export const closeBtn = style({
    backgroundColor: 'red',
});