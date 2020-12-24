import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from '../src/Modal';
import './consoleOverrides';
import themeForProvider from './theme';
import ModalComposition from '../src/Modal/compositions/ModalComposition';

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
        appElement="#root"
        width={80}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
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

const ModalStoryComposition = (props) => {
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
      <ModalComposition
        appElement="#root"
        width={80}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        {...props}
      >
        <div
          css={`
            height: 2000px;
          `}
        />
      </ModalComposition>
    </>
  );
};

storiesOf('Modals', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => <ModalStory />)
  .add('With Action Buttons', () => (
    <ModalStoryComposition
      submitProps={{
        onClick: () => null,
      }}
      submitContent="Create Card"
      height={60}
      tabNavigationProps={{
        defaultTab: 1,
        tabs: [{ text: 'tab 1' }, { text: 'tab 2' }],
        tabPanels: [
          <div
            css={`
              height: 2000px;
            `}
          >
            Hello 1
          </div>,
          <div>Hello 2</div>,
        ],
      }}
    />
  ));
