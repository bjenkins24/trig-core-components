import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender } from '@testing-library/react';
import theme from '../../stories/theme';

const Wrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const render = (ui, options) => {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export { render };
export * from '@testing-library/react';
