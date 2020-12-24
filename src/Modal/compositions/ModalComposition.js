import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'Modal';
import Button from 'Buttons/Button';
import {
  tabsNavigationTypes,
  TabsNavigation,
} from 'Tabs/compositions/TabsNavigation';
import ModalHeader from 'Modal/ModalHeader';
import { widthType } from 'utils/propTypes';

const ModalCompositionProps = {
  tabNavigationProps: PropTypes.shape(tabsNavigationTypes),
  header: PropTypes.string,
  cancelProps: PropTypes.object,
  cancelContent: PropTypes.string,
  submitProps: PropTypes.object,
  submitContent: PropTypes.string,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  height: widthType,
};

const defaultProps = {
  tabNavigationProps: null,
  header: null,
  cancelContent: 'Cancel',
  submitContent: 'Submit',
  submitProps: {},
  cancelProps: {},
  children: null,
  height: null,
};

const ModalComposition = ({
  header,
  cancelContent,
  cancelProps,
  submitContent,
  submitProps,
  tabNavigationProps,
  onRequestClose,
  children,
  height,
  isOpen,
  ...restProps
}) => {
  let defaultTab = 0;
  if (tabNavigationProps && tabNavigationProps.defaultTab) {
    defaultTab = tabNavigationProps.defaultTab;
  }

  if (!height && tabNavigationProps) {
    console.warn(
      'For the best user experience consider specifying height if you are using tabbed navigation. The Modal component accepts a height prop.'
    );
  }

  const [openTabPanel, setOpenTabPanel] = useState(defaultTab);

  const onClose = () => {
    onRequestClose();
    /* istanbul ignore next */
    setTimeout(() => {
      setOpenTabPanel(defaultTab);
    }, 300);
  };

  let adjustedTabs = [];
  if (tabNavigationProps) {
    adjustedTabs = tabNavigationProps.tabs.map((tab, index) => {
      return {
        text: tab.text,
        onClick: () => {
          setOpenTabPanel(index);
          /* istanbul ignore next */
          if (typeof tab.onClick !== 'undefined') {
            tab.onClick();
          }
        },
      };
    });
  }

  return (
    <Modal
      onRequestClose={onClose}
      isOpen={isOpen}
      height={height}
      renderHeader={() => {
        if (tabNavigationProps) {
          return (
            <div
              css={`
                margin-left: -${({ theme }) => theme.space[4]}px;
                margin-top: -${({ theme }) => theme.space[4]}px;
                position: relative;
                margin-bottom: ${({ theme }) => theme.space[3]}px;
              `}
            >
              <TabsNavigation
                variant="light"
                size="lg"
                {...tabNavigationProps}
                tabs={adjustedTabs}
                tabPanels={[]}
              />
              <div
                css={`
                  position: absolute;
                  top: 91px;
                  width: calc(100% + ${({ theme }) => theme.space[4]}px);
                  height: 2px;
                  background: ${({ theme }) => theme.colors.ps[50]};
                `}
              />
            </div>
          );
        }
        if (header) {
          return <ModalHeader>{header}</ModalHeader>;
        }
        return null;
      }}
      renderFooter={() => {
        if (!submitProps.onClick) return null;
        return (
          <>
            <div
              css={`
                margin-top: ${({ theme }) => theme.space[3]}px;
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
                {...cancelProps}
                onClick={(event) => {
                  /* istanbul ignore next */
                  if (cancelProps.onClick) {
                    cancelProps.onClick(event);
                  }
                  return onClose();
                }}
              >
                {cancelContent}
              </Button>
              <Button
                size="lg"
                css={`
                  margin-left: auto;
                `}
                {...submitProps}
              >
                {submitContent}
              </Button>
            </div>
          </>
        );
      }}
      {...restProps}
    >
      {tabNavigationProps && tabNavigationProps.tabPanels[openTabPanel]}
      {!tabNavigationProps && children}
    </Modal>
  );
};

ModalComposition.propTypes = ModalCompositionProps;
ModalComposition.defaultProps = defaultProps;

export default ModalComposition;
