import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender } from '@testing-library/react';
import theme from '../../stories/theme';

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
export * from '@testing-library/react';
