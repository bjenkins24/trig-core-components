import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import { mungeHighlight } from 'utils/mungeHighlight';

const HighlightTypes = {
  string: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

const defaultProps = {
  tag: 'mark',
};

const Highlight = ({ string, styles, tag }) => {
  const finalString = useMemo(() => {
    return mungeHighlight({ string, tag });
  }, [string, tag]);

  return (
    <div
      css={`
        ${tag} {
          ${styles}
        }
      `}
    >
      <ReactMarkdown allowDangerousHtml>{finalString}</ReactMarkdown>
    </div>
  );
};

Highlight.propTypes = HighlightTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
