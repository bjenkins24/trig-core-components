import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { toast, ToastContainer } from '../src/Toast';
import './consoleOverrides';
import themeForProvider from './theme';

storiesOf('Toast', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <div
      css={`
        width: 70rem;
      `}
    >
      <ToastContainer />
      <button
        type="button"
        onClick={() =>
          toast({
            message:
              'This is a really cool thing that we can talk about at more just for fun',
            timeout: 10000000,
          })
        }
      >
        Trigger Toast
      </button>
    </div>
  ));
