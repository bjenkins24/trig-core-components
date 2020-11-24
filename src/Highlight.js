import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const HighlightTypes = {
  string: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

const defaultProps = {
  tag: 'mark',
};

const Highlight = ({ string, styles, tag }) => {
  return (
    <div
      css={`
        ${tag} {
          ${styles}
        }
      `}
    >
      <ReactMarkdown allowDangerousHtml>{string}</ReactMarkdown>
    </div>
  );
};

Highlight.propTypes = HighlightTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
