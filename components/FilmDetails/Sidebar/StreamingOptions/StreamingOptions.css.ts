import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 24,
  borderRadius: 8,
  color: 'white',
});

export const iconContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  paddingTop: 24,
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: 100,
  gap: 8,
  alignItems: 'center',
});

export const icon = style({
  borderRadius: 12,
});
