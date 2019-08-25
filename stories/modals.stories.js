import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from '../src/Modal';
import './consoleOverrides';
import themeForProvider from './theme';

const ModalStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        Trigger Modal
      </button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
    </div>
  );
};

storiesOf('Modals', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('default', () => <ModalStory />)
  .addDecorator(withKnobs);
