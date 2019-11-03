import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const Container = styled.div``;

const fontSizes = {
  '8': '11px',
  '9': '12px',
  '10': '13px',
  '11': '14px',
  '12': '15px',
  '14': '17px',
  '18': '21px',
  '24': '27px',
  '30': '33px',
  '36': '39px',
  '48': '51px',
  '60': '63px',
  '72': '74px',
  '96': '98px',
};

const documentEditorTypes = {
  placeholder: PropTypes.string,
};

const defaultProps = {
  placeholder: 'Compose and epic...',
};

const DocumentEditor = ({ placeholder }) => {
  const quill = useRef(null);

  useEffect(() => {
    const fontSizeStyle = Quill.import('attributors/style/size');
    fontSizeStyle.whitelist = Object.values(fontSizes);
    Quill.register(fontSizeStyle, true);
    /* eslint-disable no-new */
    quill.current = new Quill('#editor', {
      modules: {
        toolbar: '#toolbar',
      },
      placeholder,
      theme: 'snow',
    });
  }, []);

  return (
    <Container>
      <div id="toolbar">
        <button
          type="button"
          onClick={() => quill.current && quill.current.history.undo()}
        />
        <button
          type="button"
          onClick={() => quill.current && quill.current.history.redo()}
        />
        <span className="ql-formats">
          <select className="ql-size">
            {Object.keys(fontSizes).map((label) => (
              <option value={fontSizes[label]} selected={label === '11'}>
                {label}
              </option>
            ))}
          </select>
        </span>
        <button type="button" className="ql-bold" />
        <button type="button" className="ql-italic" />
        <button type="button" className="ql-underline" />
        <button type="button" className="ql-color" />
        <button type="button" className="ql-background" />
        <span className="ql-formats">
          <button type="button" className="ql-align" value="" />
          <button type="button" className="ql-align" value="center" />
          <button type="button" className="ql-align" value="right" />
          <button type="button" className="ql-align" value="justify" />
        </span>
        <button type="button" className="ql-link" />
        <button type="button" className="ql-image" />
        <button type="button" className="ql-video" />
      </div>
      <div id="editor" />
    </Container>
  );
};

DocumentEditor.propTypes = documentEditorTypes;
DocumentEditor.defaultProps = defaultProps;

export default DocumentEditor;
