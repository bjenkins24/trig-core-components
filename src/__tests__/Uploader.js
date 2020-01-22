import React from 'react';
// eslint-disable-next-line
import { render, fireEvent } from 'test/utils';
import user from '@testing-library/user-event';
import Uploader from 'Uploader';

const testName = 'brian.js';
const testPreviewUrl = 'https://example.com';
const mockFileRemoveCallback = jest.fn();

const makeDropzoneComponent = ({
  previewComponentProps = {},
  layoutComponentProps = {},
  inputComponentProps = {},
  submitComponentProps = {},
  withBasicProps = false,
}) => {
  return ({
    getUploadParams,
    PreviewComponent,
    LayoutComponent,
    InputComponent,
    SubmitButtonComponent,
    onSubmit,
  }) => {
    return (
      <div data-testid="dropzone">
        {withBasicProps && (
          <button
            data-testid="submit"
            onClick={onSubmit([], [{ remove: mockFileRemoveCallback }])}
          >
            Hello
          </button>
        )}
        {getUploadParams().url}
        {Object.keys(previewComponentProps).length !== 0 && (
          <PreviewComponent {...previewComponentProps} />
        )}
        {Object.keys(layoutComponentProps).length !== 0 && (
          <LayoutComponent {...layoutComponentProps} />
        )}
        {Object.keys(inputComponentProps).length !== 0 && (
          <InputComponent {...inputComponentProps} />
        )}
        {Object.keys(submitComponentProps).length !== 0 && (
          <SubmitButtonComponent {...submitComponentProps} />
        )}
      </div>
    );
  };
};

const mockRemove = jest.fn();
const mockFileClick = jest.fn();

describe('<Uploader />', () => {
  it('renders with basic props correctly', () => {
    const mockCallBack = jest.fn();
    const { getByTestId, rerender } = render(
      <Uploader
        uploadUrl="test"
        DropzoneComponent={makeDropzoneComponent({ withBasicProps: true })}
        onSubmit={mockCallBack}
      />
    );
    user.click(getByTestId('submit'));
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockFileRemoveCallback.mock.calls.length).toEqual(1);
    rerender(
      <Uploader
        uploadUrl="test"
        DropzoneComponent={makeDropzoneComponent({ withBasicProps: true })}
      />
    );
    user.click(getByTestId('submit'));
  });

  it('renders the preview component correctly', () => {
    const uploadUrl = 'https://testUrl';

    const {
      getByTitle,
      getByAltText,
      getByText,
      getByTestId,
      rerender,
    } = render(
      <Uploader
        DropzoneComponent={makeDropzoneComponent({
          previewComponentProps: {
            meta: {
              name: testName,
              previewUrl: testPreviewUrl,
              status: 'success',
            },
            fileWithMeta: { remove: mockRemove },
          },
        })}
        uploadUrl={uploadUrl}
      />
    );

    expect(getByText(uploadUrl)).toBeInTheDocument();
    expect(getByAltText(`${testName} preview`)).toBeInTheDocument();
    expect(getByTitle(/loading icon/i)).toBeInTheDocument();

    rerender(
      <Uploader
        onFileClick={mockFileClick}
        DropzoneComponent={makeDropzoneComponent({
          previewComponentProps: {
            meta: { name: testName, previewUrl: false, status: 'done' },
            fileWithMeta: { remove: mockRemove },
          },
        })}
        uploadUrl={uploadUrl}
      />
    );

    expect(getByTitle(/javascript icon/i)).toBeInTheDocument();
    expect(getByTitle(/check circle icon/i)).toBeInTheDocument();
    expect(getByText(/click to edit details/i)).toBeInTheDocument();
    user.click(getByTitle(/close icon/i));
    expect(mockRemove.mock.calls.length).toEqual(1);
    user.click(getByTestId('uploader__listItem'));
    expect(mockFileClick.mock.calls.length).toEqual(2);

    rerender(
      <Uploader
        DropzoneComponent={makeDropzoneComponent({
          previewComponentProps: {
            meta: { name: testName, previewUrl: false, status: 'done' },
            fileWithMeta: { remove: mockRemove },
          },
        })}
        uploadUrl={uploadUrl}
      />
    );
    user.click(getByTestId('uploader__listItem'));
  });

  it('renders the input component correctly', () => {
    const mockOnFiles = jest.fn();
    const mockOnUpload = jest.fn();
    const fileMock = 'file';
    const { getByText, getByTestId, rerender } = render(
      <Uploader
        onUpload={mockOnUpload}
        DropzoneComponent={makeDropzoneComponent({
          inputComponentProps: {
            onFiles: mockOnFiles,
            getFilesFromEvent: () => fileMock,
            accept: 'jpg',
          },
        })}
        uploadUrl="test"
      />
    );

    expect(getByText(/add file/i)).toBeInTheDocument();

    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    fireEvent.change(getByTestId('uploader__fileInput'), {
      target: { files: [file] },
    });

    expect(mockOnUpload.mock.calls.length).toEqual(1);
    expect(mockOnUpload).toBeCalledWith(fileMock);
    expect(mockOnFiles.mock.calls.length).toEqual(1);
    expect(mockOnFiles).toBeCalledWith(fileMock);

    rerender(
      <Uploader
        uploadUrl="test"
        DropzoneComponent={makeDropzoneComponent({
          inputComponentProps: {
            onFiles: mockOnFiles,
            getFilesFromEvent: () => fileMock,
            accept: 'jpg',
          },
        })}
      />
    );
    fireEvent.change(getByTestId('uploader__fileInput'), {
      target: { files: [file] },
    });
  });

  it('renders the submit component correctly', () => {
    const submitButtonContent = 'hello there';
    const mockCancelCallback = jest.fn();
    const mockSubmitRemove = jest.fn();
    const mockSubmit = jest.fn();
    const file = { meta: { status: 'done' }, remove: () => {} };
    const { getByText, getByTestId, rerender } = render(
      <Uploader
        uploadUrl="test"
        submitButtonContent={submitButtonContent}
        onCancel={mockCancelCallback}
        DropzoneComponent={makeDropzoneComponent({
          submitComponentProps: {
            files: [
              { remove: mockSubmitRemove, meta: { status: 'whatever status' } },
              file,
            ],
            onSubmit: mockSubmit,
            disabled: false,
          },
        })}
      />
    );

    expect(getByText(submitButtonContent)).toBeInTheDocument();
    user.click(getByTestId('uploader__cancelButton'));
    expect(mockCancelCallback.mock.calls.length).toEqual(1);
    expect(mockSubmitRemove.mock.calls.length).toEqual(1);

    user.click(getByTestId('uploader__submitFiles'));
    expect(mockSubmit.mock.calls.length).toEqual(1);
    expect(mockSubmit).toBeCalledWith([file]);

    rerender(
      <Uploader
        uploadUrl="sup"
        DropzoneComponent={makeDropzoneComponent({
          submitComponentProps: {
            files: [
              { remove: mockSubmitRemove, meta: { status: 'whatever status' } },
              file,
            ],
            onSubmit: mockSubmit,
            disabled: false,
          },
        })}
      />
    );
    user.click(getByTestId('uploader__cancelButton'));
  });

  it('renders the layout component correctly', () => {
    const submitButtonContent = 'hello there';
    const inputContent = 'input content';
    const previewsContent = 'previews';

    const { getByText, queryByText, rerender } = render(
      <Uploader
        uploadUrl="sup"
        submitButtonContent={submitButtonContent}
        onUpload={() => {}}
        DropzoneComponent={makeDropzoneComponent({
          layoutComponentProps: {
            input: inputContent,
            previews: previewsContent,
            submitButton: submitButtonContent,
            files: [1, 2, 3],
            extra: { maxFiles: 4 },
          },
        })}
      />
    );

    expect(getByText(inputContent)).toBeInTheDocument();
    expect(getByText(previewsContent)).toBeInTheDocument();
    expect(getByText(submitButtonContent)).toBeInTheDocument();

    rerender(
      <Uploader
        uploadUrl="sup"
        submitButtonContent={submitButtonContent}
        onUpload={() => {}}
        DropzoneComponent={makeDropzoneComponent({
          layoutComponentProps: {
            input: inputContent,
            previews: previewsContent,
            submitButton: submitButtonContent,
            files: [1, 2, 3],
            extra: { maxFiles: 2 },
          },
        })}
      />
    );

    expect(queryByText(inputContent)).toBeNull();

    rerender(
      <Uploader
        uploadUrl="test"
        submitButtonContent={submitButtonContent}
        onUpload={() => {}}
        DropzoneComponent={makeDropzoneComponent({
          layoutComponentProps: {
            input: inputContent,
            previews: previewsContent,
            submitButton: submitButtonContent,
            files: [],
            extra: { maxFiles: 2 },
          },
        })}
      />
    );
    expect(queryByText(submitButtonContent)).toBeNull();
  });
});
