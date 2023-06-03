import { style } from "@vanilla-extract/css";

export const translucent = style({
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur (16px) saturate(180%)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const highOpacityTranslucent = style({
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur (16px) saturate(180%)',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
});