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
        ul li {
          list-style-type: disc;
        }
        blockquote {
          border-left: 2px solid ${({ theme }) => theme.p};
          padding-left: ${({ theme }) => theme.space[3]}px;
          margin-left: 0;
        }
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
