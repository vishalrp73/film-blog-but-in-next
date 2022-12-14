import { style } from "@vanilla-extract/css";

export const container = style({
    width: '100%',
    display: 'flex',
    padding: '100px 0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    color: 'white',
    borderBottom: '8px solid rgb(255, 0, 162)',
});

export const goldenSeal = style({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    '@media': {
        'screen and (max-width: 640px)': {
            width: 100,
            height: 100,
        },
    }
})

export const title = style({
    padding: 20,
    fontSize: 72,
    textAlign: 'center',
    borderRadius: 12,
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur (16px) saturate(180%)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    '@media': {
        'screen and (max-width: 768px)': {
            fontSize: 48
        },
        'screen and (max-width: 640px)': {
            fontSize: 32,
        },
        'screen and (max-width: 480px)': {
            fontSize: 24,
        }
    }
})

export const description = style({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    margin: '30px 0',
    borderRadius: 12,
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur (16px) saturate(180%)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
});