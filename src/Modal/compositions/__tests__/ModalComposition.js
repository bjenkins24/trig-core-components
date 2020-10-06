import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import ReactModal from 'react-modal';
import { ModalComposition } from '../index';

ReactModal.setAppElement('*');

jest.spyOn(console, 'warn').mockImplementation(() => {});

const mockTabClick = jest.fn();
const tabs = [{ text: 'tab 1' }, { text: 'tab 2', onClick: mockTabClick }];
const tabContent = 'My cool tab content 1';
const tabContent2 = 'My cool tab content 2';
const headerText = 'Header Text';
const content = 'My cool content';
const submitButtonText = 'My submit button';
const cancelButtonText = 'My cancel button';

describe('<ModalComposition />', () => {
  it('renders and takes basic props', () => {
    const { getByText, rerender } = render(
      <ModalComposition
        isOpen
        onRequestClose={() => null}
        tabNavigationProps={{
          tabs,
          tabPanels: [<div>{tabContent}</div>, <div>{tabContent2}</div>],
        }}
      />
    );
    expect(getByText(tabs[0].text)).toBeInTheDocument();
    expect(getByText(tabContent)).toBeInTheDocument();
    user.click(getByText(tabs[1].text));
    expect(mockTabClick).toHaveBeenCalledTimes(1);

    expect(getByText(tabs[1].text)).toBeInTheDocument();
    expect(getByText(tabContent2)).toBeInTheDocument();

    rerender(
      <ModalComposition
        onRequestClose={() => null}
        tabNavigationProps={{
          tabs,
          tabPanels: [<div>1</div>, <div>2</div>],
          defaultTab: 1,
        }}
      />
    );
  });

  it('renders actions correctly', () => {
    const mockCallback = jest.fn();
    const mockClose = jest.fn();
    const mockCancel = jest.fn();
    const { getByText, rerender } = render(
      <ModalComposition
        isOpen
        onRequestClose={mockClose}
        header={headerText}
        submitContent={submitButtonText}
        onSubmit={mockCallback}
        cancelContent={cancelButtonText}
        onCancel={mockCancel}
      >
        {content}
      </ModalComposition>
    );
    const submitButton = getByText(submitButtonText);
    const cancelButton = getByText(cancelButtonText);
    expect(submitButton).toBeInTheDocument();
    expect(getByText(headerText)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();

    expect(mockCallback).toHaveBeenCalledTimes(0);
    user.click(submitButton);
    expect(mockCallback).toHaveBeenCalledTimes(1);

    expect(mockClose).toHaveBeenCalledTimes(0);
    user.click(cancelButton);
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(mockCancel).toHaveBeenCalledTimes(1);

    rerender(<ModalComposition onRequestClose={() => null} isOpen={false} />);
  });
});
