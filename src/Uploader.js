import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone-uploader';
import { HorizontalGroup } from './Groups';
import ListItemContent from './Lists/ListItemContent';
import ListItem from './Lists/ListItem';
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

const LabelStyled = styled.label`
  width: 100%;
  height: 8.5rem;
  border: 0.1rem dashed ${({ theme }) => theme.ps[100]};
  border-radius: 0.2rem;
  display: block;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputContent = styled(HorizontalGroup)`
  margin: 0 auto;
`;

const Previews = styled.div`
  margin: 3.2rem 0;
  border-radius: ${({ theme }) => theme.br};
`;

const PreviewImage = styled(Image)`
  max-width: 5.6rem;
  max-height: 5.6rem;
`;

const uploaderTypes = {
  submitContent: PropTypes.string,
};

const defaultProps = {
  submitContent: 'Create Cards',
};

const Uploader = ({ submitContent }) => {
  /* eslint-disable react/prop-types */
  const Input = ({ accept, onFiles, getFilesFromEvent }) => {
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
          }}
        />
      </LabelStyled>
    );
  };

  const SubmitButton = ({ files, onSubmit, disabled }) => {
    const disabledDefault =
      files.some((file) =>
        ['preparing', 'getting_upload_params', 'uploading'].includes(
          file.meta.status
        )
      ) ||
      !files.some((file) =>
        ['headers_received', 'done'].includes(file.meta.status)
      );

    const handleSubmit = () => {
      onSubmit(
        files.filter((file) =>
          ['headers_received', 'done'].includes(file.meta.status)
        )
      );
    };

    return (
      <div
        css={`
          display: flex;
        `}
      >
        <Button
          css={`
            padding: 0;
          `}
          size="lg"
          variant="transparent"
        >
          Cancel
        </Button>
        <Button
          css={`
            margin-left: auto;
          `}
          size="lg"
          onClick={handleSubmit}
          disabled={disabled || disabledDefault}
        >
          {submitContent}
        </Button>
      </div>
    );
  };

  const Layout = ({
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
        <Previews>{previews}</Previews>
        {files.length > 0 && submitButton}
      </div>
    );
  };

  const Preview = ({ meta, fileWithMeta }) => {
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
    /* eslint-enable react/prop-types */

    return (
      <ListItem
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
          <Icon type="close" color="s" size={1.6} onClick={remove} />,
        ]}
      />
      // <ListItem
      //   renderItem={() => <Icon type="file" />}
      //   renderContent={() => {}}
      //   actions={[]}
      //   />
      //   {name}, {Math.round(percent)}%, {status}
      // </span>
    );
  };

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    console.log(meta);
    return { url: 'https://httpbin.org/post' };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files, allFiles);
    // console.log(files.map((f) => f.meta));
    // allFiles.forEach((f) => f.remove());
  };

  return (
    <Container>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        InputComponent={Input}
        LayoutComponent={Layout}
        PreviewComponent={Preview}
        SubmitButtonComponent={SubmitButton}
      />
    </Container>
  );
};

Uploader.propTypes = uploaderTypes;
Uploader.defaultProps = defaultProps;

export default Uploader;
