import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone-uploader';
import { HorizontalGroup } from './Groups';
import { List, ListItem, ListItemContent } from './Lists';
import Button from './Buttons';
import Image from './Image';
import Icon from './Icon';
import Loading from './Loading';
import { Body2 } from './Typography';

const toTitleCase = (str) => {
  const newString = str.toLowerCase().split(' ');
  for (let i = 0; i < newString.length; i += 1) {
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
  }
  return newString.join(' ');
};

const makeCardNameFromFilename = (filename) => {
  return toTitleCase(filename)
    .replace(/\.[^/.]+$/, '')
    .replace(/_/g, ' ');
};

const Container = styled.div`
  .dzu-dropzone {
    width: calc(100% - 0.2rem);
  }
`;

const Remove = styled(Icon)`
  &:hover svg {
    color: ${({ theme }) => theme.ss[900]};
  }
`;

const LabelStyled = styled.label`
  width: 100%;
  height: 8.5rem;
  border: 0.1rem dashed ${({ theme }) => theme.ps[100]};
  border-radius: ${({ theme }) => theme.br};
  display: block;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputContent = styled(HorizontalGroup)`
  margin: 0 auto;
`;

const StyledList = styled(List)`
  margin: 3.2rem 0;
`;

const PreviewImage = styled(Image)`
  max-width: 5.6rem;
  max-height: 5.6rem;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const CancelButton = styled(Button)`
  padding: 0;
`;

const SubmitFilesButton = styled(Button)`
  margin-left: auto;
`;

const uploaderTypes = {
  uploadUrl: PropTypes.string.isRequired,
  submitButtonContent: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onUpload: PropTypes.func,
  onFileClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  submitButtonContent: 'Create Cards',
  onSubmit: () => null,
  onCancel: () => null,
  onUpload: () => null,
  onFileClick: () => null,
  className: '',
};

const Uploader = ({
  onSubmit,
  uploadUrl,
  onUpload,
  onFileClick,
  onCancel,
  submitButtonContent,
  className,
  ...restProps
}) => {
  return (
    <Container className={className}>
      <Dropzone
        getUploadParams={() => {
          return { url: uploadUrl };
        }}
        onSubmit={(files, allFiles) => {
          allFiles.forEach((f) => f.remove());
          onSubmit(files, allFiles);
        }}
        LayoutComponent={({
          input,
          previews,
          submitButton,
          dropzoneProps,
          files,
          extra: { maxFiles },
        }) => {
          return (
            <div>
              <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
              <StyledList>{previews}</StyledList>
              {files.length > 0 && submitButton}
            </div>
          );
        }}
        InputComponent={({ accept, onFiles, getFilesFromEvent }) => {
          return (
            <LabelStyled>
              <InputContent margin={1.6}>
                <Icon type="file" size={2.4} />
                <Body2 as="div" color="ps.200">
                  <Body2 weight="bold" color="s">
                    Add file
                  </Body2>{' '}
                  or drop files here
                </Body2>
              </InputContent>
              <input
                style={{ display: 'none' }}
                type="file"
                accept={accept}
                multiple
                onChange={(e) => {
                  const chosenFiles = getFilesFromEvent(e);
                  onFiles(chosenFiles);
                  onUpload(chosenFiles);
                }}
              />
            </LabelStyled>
          );
        }}
        PreviewComponent={({ meta, fileWithMeta }) => {
          const { name, previewUrl, status } = meta;
          const { remove } = fileWithMeta;
          const fileExtension = name.split('.').pop();

          const renderItem = previewUrl ? (
            <PreviewImage src={previewUrl} />
          ) : (
            <Icon
              type={fileExtension}
              color="pc"
              size={2.4}
              defaultIfNoExtension="file"
            />
          );

          return (
            <ListItem
              onClick={() => onFileClick({ file: fileWithMeta, meta })}
              renderItem={() => renderItem}
              renderContent={() => (
                <ListItemContent
                  primary={makeCardNameFromFilename(name)}
                  secondary="Click to edit details"
                />
              )}
              actions={[
                status !== 'done' ? (
                  <Loading size={1.6} />
                ) : (
                  <Icon type="check-circle" size={1.6} color="s" />
                ),
                <Remove type="close" color="s" size={1.6} onClick={remove} />,
              ]}
            />
          );
        }}
        SubmitButtonComponent={({
          files,
          onSubmit: onUploaderSubmit,
          disabled,
        }) => {
          const disabledDefault =
            files.some((file) =>
              ['preparing', 'getting_upload_params', 'uploading'].includes(
                file.meta.status
              )
            ) ||
            !files.some((file) =>
              ['headers_received', 'done'].includes(file.meta.status)
            );

          return (
            <ButtonGroup>
              <CancelButton
                onClick={() => {
                  files.forEach((file) => file.remove());
                  onCancel();
                }}
                size="lg"
                variant="transparent"
              >
                Cancel
              </CancelButton>
              <SubmitFilesButton
                size="lg"
                onClick={() => {
                  onUploaderSubmit(
                    files.filter((file) =>
                      ['headers_received', 'done'].includes(file.meta.status)
                    )
                  );
                }}
                disabled={disabled || disabledDefault}
              >
                {submitButtonContent}
              </SubmitFilesButton>
            </ButtonGroup>
          );
        }}
        {...restProps}
      />
    </Container>
  );
};

Uploader.propTypes = uploaderTypes;
Uploader.defaultProps = defaultProps;

export default Uploader;
