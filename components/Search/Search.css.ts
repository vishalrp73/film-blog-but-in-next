import { style } from '@vanilla-extract/css';

export const container = style({
    width: '75%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media': {
        'screen and (max-width: 768px)': {
            flexDirection: 'column',
        }
    }
});

export const sortBtnGroup = style({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '@media': {
        'screen and (max-width: 768px)': {
            marginTop: 20,
        },
        'screen and (max-width: 375px)': {
            flexDirection: 'column',
        },
    }
})


export const searchInput = style({
    width: '70%',
    height: 50,
    backgroundColor: '#0C0C0C',
    border: '2px ridge rgb(255, 0, 162)',
    borderRadius: 5,
    color: 'rgb(255, 0, 162)',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    '@media': {
        'screen and (max-width: 768px)': {
            width: '100%',
        }
    }
});