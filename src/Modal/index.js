import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { device } from '@trig-app/constants';
import ReactModal from 'react-modal';
import { widthType } from 'utils/propTypes';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ModalHeader from 'Modal/ModalHeader';
import { Button } from '../Buttons';
import Icon from '../Icon';
import { getWidth, getHeight } from '../utils';

const transitionTimeMS = 150;

const GlobalStyle = createGlobalStyle`
.ReactModal {
  &__Body--open, &__Html--open {
    overflow: hidden;
  }
  &__Overlay {
    background: rgba(0, 0, 0, 0.4) !important;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity ${transitionTimeMS}ms ease-in-out;
    z-index: 1000;
    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
}
.${({ contentClassName }) => contentClassName} .ReactModal__Content {
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: 50% !important;
    overflow: visible !important;
    padding: ${({ theme }) => theme.space[4]}px !important;
    transform: translateX(-50%);
    height: calc(100vh - ${({ theme }) => theme.space[4] * 2}px);
    width: calc(100% - ${({ theme }) => theme.space[4] * 2}px);
    border-radius: 0 !important;
    border: 0 !important;
    display: flex;
    @media ${device.tabletPortraitUp} {
      ${getWidth};
      ${getHeight};
      max-height: calc(100% - ${({ theme }) => theme.space[4] * 4}px);
      border-radius: 0.4rem !important;
    }
  }
`;

const CloseButton = styled(Icon).attrs({ size: 1.6, type: 'close' })`
  position: absolute;
  top: ${({ theme }) => theme.space[3]}px;
  right: ${({ theme }) => theme.space[3]}px;
  cursor: pointer;
  color: ${({ theme }) => theme.bcs[200]} !important;
  &:hover {
    color: ${({ theme }) => theme.bc} !important;
  }
`;

const makeRandomClass = () => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 8; i += 1) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

const modalTypes = {
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  width: widthType,
  height: widthType,
  appElement: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  cancelContent: PropTypes.string,
  submitContent: PropTypes.string,
  withActions: PropTypes.bool,
};

const defaultProps = {
  width: 'auto',
  height: 'auto',
  appElement: '',
  onSubmit: () => null,
  onCancel: () => null,
  cancelContent: 'Cancel',
  submitContent: 'Submit',
  withActions: false,
};

const Modal = ({
  children,
  onRequestClose,
  isOpen,
  width,
  height,
  appElement,
  onSubmit,
  onCancel,
  submitContent,
  cancelContent,
  withActions,
  ...restProps
}) => {
  const contentClassName = useRef(makeRandomClass());

  if (appElement) {
    ReactModal.setAppElement(appElement);
  }

  return (
    <>
      <GlobalStyle
        width={width}
        height={height}
        contentClassName={contentClassName.current}
      />
      <ReactModal
        contentLabel="Modal"
        closeTimeoutMS={transitionTimeMS}
        onRequestClose={onRequestClose}
        isOpen={isOpen}
        portalClassName={contentClassName.current}
        {...restProps}
      >
        <div
          css={`
            display: flex;
            flex-direction: column;
            width: 100%;
          `}
        >
          <header
            css={`
              margin-bottom: ${({ theme }) => theme.space[2]}px;
            `}
          >
            <ModalHeader>Create a Card</ModalHeader>
            <CloseButton
              role="button"
              aria-label="Close"
              onClick={onRequestClose}
            />
          </header>
          <div
            withActions={withActions}
            css={`
              flex: 1 1 auto;
              overflow: hidden auto;
              max-height: 100%;
              display: flex;
              width: calc(100% + 15px);
            `}
          >
            <PerfectScrollbar
              css={`
                width: 100%;
              `}
            >
              <div
                css={`
                  margin-right: 15px;
                `}
              >
                {children}
              </div>
            </PerfectScrollbar>
          </div>
          {withActions && (
            <footer
              css={`
                margin-top: ${({ theme }) => theme.space[2]}px;
                width: 100%;
                margin-left: -${({ theme }) => theme.space[4]}px;
                padding: 0 ${({ theme }) => theme.space[4]}px;
              `}
            >
              <div
                css={`
                  margin-left: -${({ theme }) => theme.space[4]}px;
                  width: calc(100% + ${({ theme }) => theme.space[4] * 2}px);
                  height: 1px;
                  background: ${({ theme }) => theme.colors.ps[50]};
                `}
              />
              <div
                css={`
                  display: flex;
                  align-items: center;
                  margin-top: ${({ theme }) => theme.space[4]}px;
                `}
              >
                <Button
                  size="lg"
                  variant="transparent"
                  css={`
                    padding-left: 0;
                  `}
                  onClick={onCancel}
                >
                  {cancelContent}
                </Button>
                <Button
                  size="lg"
                  css={`
                    margin-left: auto;
                  `}
                  onClick={onSubmit}
                >
                  {submitContent}
                </Button>
              </div>
            </footer>
          )}
        </div>
      </ReactModal>
    </>
  );
};

Modal.propTypes = modalTypes;
Modal.defaultProps = defaultProps;

export default Modal;
