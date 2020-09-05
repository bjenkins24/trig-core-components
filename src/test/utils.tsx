import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender } from '@testing-library/react';
import theme from '../../stories/theme';
import { Theme } from '../utils/theme';

interface CustomOptions {
  theme: Theme;
}

const render = (ui: ReactElement, options?: CustomOptions) => {
  const Wrapper = ({ children }: { children: ReactElement }) => {
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
