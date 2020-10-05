import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from '../src/Modal';
import './consoleOverrides';
import themeForProvider from './theme';

// eslint-disable-next-line
const ModalStory = ({ withActions }) => {
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
        appElement="#root"
        width={80}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        withActions={withActions}
      >
        <div
          css={`
            height: 2000px;
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
  .add('default', () => <ModalStory />)
  .add('With Action Buttons', () => <ModalStory withActions />);
