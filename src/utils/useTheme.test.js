import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import useTheme from './useTheme';
import theme from '../../stories/theme';

const TestComponent = () => {
  const myTheme = useTheme();
  return (
    <div
      css={`
        background: ${myTheme.p};
      `}
    />
  );
};

describe('useTheme()', () => {
  it("get's the theme", () => {
    const component = mount(
      <ThemeProvider theme={theme}>
        <TestComponent />
      </ThemeProvider>
    );
    expect(component).toHaveStyleRule('background', theme.p);
  });
});
