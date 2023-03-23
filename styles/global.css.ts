import { globalStyle } from "@vanilla-extract/css";

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  fontFamily: 'Arial, Helvetica, sans-serif',
});

globalStyle('html, body', {
  backgroundColor: 'rgb(10, 10, 10)',
});