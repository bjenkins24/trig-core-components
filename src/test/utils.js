import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender } from '@testing-library/react';
import themes from '../../stories/theme';

const render = (ui, { theme = themes, ...options }) => {
  const Wrapper = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export { render };
export * from '@testing-library/react';
