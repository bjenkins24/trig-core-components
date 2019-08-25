import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from '../src/Modal';
import { Heading1 } from '../src/Typography';
import Separator from '../src/Separator';
import './consoleOverrides';
import themeForProvider from './theme';

const ModalStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Trigger Modal
      </button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <Heading1>Create a New Card</Heading1>
        <Separator />
      </Modal>
    </>
  );
};

storiesOf('Modals', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('default', () => <ModalStory />)
  .addDecorator(withKnobs);
