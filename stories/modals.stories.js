import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from '../src/Modal';
import ModalHeader from '../src/Modal/ModalHeader';
import './consoleOverrides';
import themeForProvider from './theme';

const ModalStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="modal-container">
        <p>
          Lorem ipsum dolor teit. Lorem ipsum dolor teit. Lorem ipsum dolor
          teit. Lorem ipsum dolor teit. Lorem ipsum dolor teit. Lorem ipsum
          dolor teit. Lorem ipsum dolor teit. Lorem ipsum dolor teit. Lorem
          ipsum dolor teit. Lorem ipsum dolor teit. Lorem ipsum dolor teit.{' '}
          Lorem ipsum dolor teit. Lorem ipsum dolor teit.{' '}
        </p>
        <button type="button" onClick={() => setIsOpen(true)}>
          Trigger Modal
        </button>
      </div>
      <Modal
        width={80}
        height={80}
        appSelector=".modal-container"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <ModalHeader>Create a Card</ModalHeader>
        <div
          css={`
            height: 2000px;
            background: blue;
          `}
        />
      </Modal>
    </>
  );
};

storiesOf('Modals', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => <ModalStory />);
