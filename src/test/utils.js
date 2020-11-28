import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender } from '@testing-library/react';
import theme from '../../stories/theme';

/* eslint-disable */
(function() {
  const { error } = console;

  console.error = function() {
    if (typeof arguments[0] !== 'string') {
      return error.apply(console, arguments);
    }
    if (
      typeof arguments[0] === 'undefined' ||
      (!arguments[0].includes('If you want to write it to the DOM,') &&
        !arguments[0].includes(
          'If you intentionally want it to appear in the DOM'
        ) &&
        !arguments[0].includes(
          'is unrecognized in this browser. If you meant'
        ) &&
        !arguments[0].includes('The following props are not supported:'))
    ) {
      error.apply(console, arguments);
    }
  };
})();
/* eslint-enable */

const render = (ui, options) => {
  const Wrapper = ({ children }) => {
    const finalTheme = get(options, 'theme', theme);
    return <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>;
  };

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export { render };
export { screen } from '@testing-library/react';
export * from '@testing-library/react';
