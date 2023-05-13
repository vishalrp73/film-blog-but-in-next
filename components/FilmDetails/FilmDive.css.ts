import { style } from '@vanilla-extract/css';

export const container = style({
  color: 'white',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
});

export const contentContainer = style({
  width: '90%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 160,
  margin: '0 auto',
});

export const quickBar = style({
  width: '25%',
  color: 'white',
});

export const quickInfo = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const categoryList = style({
  display: 'flex',
  flexDirection: 'column',
});

export const commentPanel = style({
  marginTop: 45,
  maxHeight: 600,
  overflow: 'scroll',
});

export const commentHeading = style({});

export const categories = style({
  width: '100%',
});

export const reviewPanelContainer = style({
  width: '65%',
});

export const genericPanel = style({
  height: 'max-content',
  padding: 20,
  borderRadius: 12,
});

export const reviewScoreContainer = style({
  minWidth: 60,
  maxWidth: 60,
  minHeight: 60,
  maxHeight: 60,
  borderRadius: '100%',
  border: '2px double rgb(250, 0, 162)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const reviewScore = style({
  fontSize: 24,
});

export const reviewTextContainer = style({
  width: '100%',
  padding: 10,
});

export const reviewText = style({
  textAlign: 'justify',
  lineHeight: 1.3,
});
