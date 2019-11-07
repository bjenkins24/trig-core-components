import React from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';
import { isKeyHotkey } from 'is-hotkey';
import Plain from 'slate-plain-serializer';
import { Body2Styles } from '../Typography';
import Button from '../Buttons';
import Icon from '../Icon';

const Container = styled.div`
  ${Body2Styles}
  border-bottom: 0.1rem solid ${({ theme }) => theme.ps[50]};
`;

const Toolbar = styled.div`
  border-top: 0.1rem solid ${({ theme }) => theme.ps[50]};
  border-bottom: 0.1rem solid ${({ theme }) => theme.ps[50]};
`;

const StyledButton = styled(Button)`
  margin: 0.8rem 0.4rem;
  background: ${({ theme, isActive }) => (isActive ? theme.ps[50] : 'none')};
  padding: 1.2rem;
  & span {
    color: ${({ theme, isActive }) => (isActive ? theme.p : theme.ps[400])};
  }
  &:hover {
    background: ${({ theme }) => theme.ps[50]};
    & span {
      color: ${({ theme }) => theme.p};
    }
  }
`;

const StyledEditor = styled(Editor)`
  padding: 1.6rem;
  height: 20rem;
  overflow-y: auto;
`;

const DEFAULT_NODE = 'paragraph';

const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');

const initialValue = Plain.deserialize('');

class DocumentEditor extends React.Component {
  state = {
    value: initialValue,
  };

  hasMark = (type) => {
    const { value } = this.state;
    return value.activeMarks.some((mark) => mark.type === type);
  };

  hasBlock = (type) => {
    const { value } = this.state;
    return value.blocks.some((node) => node.type === type);
  };

  ref = (editor) => {
    this.editor = editor;
  };

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type);

    return (
      <StyledButton
        variant="transparent"
        onMouseDown={(event) => {
          this.onClickMark(event, type);
        }}
        isActive={isActive}
      >
        <Icon type={icon} size={1.6} />
      </StyledButton>
    );
  };

  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const {
        value: { document, blocks },
      } = this.state;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <StyledButton
        variant="transparent"
        onMouseDown={(event) => this.onClickBlock(event, type)}
        isActive={isActive}
      >
        <Icon type={icon} size={1.6} />
      </StyledButton>
    );
  };

  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      default:
        return next();
    }
  };

  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'code':
        return <code {...attributes}>{children}</code>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onKeyDown = (event, editor, next) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isCodeHotkey(event)) {
      mark = 'code';
    } else {
      return next();
    }

    event.preventDefault();
    return editor.toggleMark(mark);
  };

  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  onClickBlock = (event, type) => {
    event.preventDefault();

    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some((block) => {
        return !!document.getClosest(
          block.key,
          (parent) => parent.type === type
        );
      });

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        editor
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Toolbar>
          {this.renderMarkButton('bold', 'bold')}
          {this.renderMarkButton('italic', 'italic')}
          {this.renderMarkButton('underlined', 'underline')}
          {this.renderMarkButton('code', 'code')}
          {this.renderBlockButton('heading-one', 'number-one')}
          {this.renderBlockButton('heading-two', 'number-two')}
          {this.renderBlockButton('block-quote', 'quote')}
          {this.renderBlockButton('numbered-list', 'list-ordered')}
          {this.renderBlockButton('bulleted-list', 'list-unordered')}
        </Toolbar>
        <StyledEditor
          spellCheck
          autoFocus
          placeholder="Enter some rich text..."
          ref={this.ref}
          value={value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderBlock={this.renderBlock}
          renderMark={this.renderMark}
        />
      </Container>
    );
  }
}

/**
 * Export.
 */

export default DocumentEditor;
