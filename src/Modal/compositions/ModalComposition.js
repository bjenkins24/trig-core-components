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
  cancelContent: PropTypes.string,
  onCancel: PropTypes.func,
  submitContent: PropTypes.string,
  onSubmit: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  height: widthType,
};

const defaultProps = {
  tabNavigationProps: null,
  header: null,
  cancelContent: 'Cancel',
  submitContent: 'Submit',
  onCancel: null,
  onSubmit: null,
  children: null,
  height: null,
};

const ModalComposition = ({
  header,
  cancelContent,
  onCancel,
  submitContent,
  onSubmit,
  tabNavigationProps,
  onRequestClose,
  children,
  height,
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
      onRequestClose={onRequestClose}
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
        if (!onSubmit) return null;
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
                onClick={(event) => {
                  /* istanbul ignore next */
                  if (onCancel) {
                    onCancel(event);
                  }
                  return onRequestClose();
                }}
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
