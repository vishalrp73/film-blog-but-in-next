import { StyleRule } from '@vanilla-extract/css';
import { Properties, SimplePseudos } from 'csstype';
import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';
import { Breakpoint, breakpoints } from './breakpoints';

const makeMediaQuery =
  (breakpoint: Breakpoint) => (styles: Properties<string | number>) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : { [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles };

const mediaQuery = {
  mobile: makeMediaQuery('mobile'),
  tablet: makeMediaQuery('tablet'),
  desktop: makeMediaQuery('desktop'),
};

type CSSProps = Properties<string | number> & {
  [P in SimplePseudos]?: Properties<string | number>;
};

interface ResponsiveStyle {
  mobile?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
}

export const responsiveStyle = ({
  mobile,
  tablet,
  desktop,
}: ResponsiveStyle): StyleRule => {
  const mobileStyles = omit(mobile, '@media');
  const stylesBelowMobile = mobileStyles;

  const stylesBelowTablet = mobileStyles || stylesBelowMobile;
  const tabletStyles =
    !tablet || isEqual(tablet, stylesBelowTablet) ? null : tablet;

  const stylesBelowDesktop = tabletStyles || stylesBelowTablet;
  const desktopStyles =
    !desktop || isEqual(desktop, stylesBelowDesktop) ? null : desktop;

  const hasMediaQueries = mobileStyles || tabletStyles || desktopStyles;

  return {
    ...mobileStyles,
    ...(hasMediaQueries
      ? {
          '@media': {
            ...(mobileStyles ? mediaQuery.mobile(mobileStyles) : {}),
            ...(tabletStyles ? mediaQuery.tablet(tabletStyles) : {}),
            ...(desktopStyles ? mediaQuery.desktop(desktopStyles) : {}),
          },
        }
      : {}),
  };
};
