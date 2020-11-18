import React from 'react';
import PropTypes from 'prop-types';

const HighlightTypes = {
  string: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  tag: PropTypes.string,
};

const defaultProps = {
  tag: 'em',
};

const Highlight = ({ string, style, tag }) => {
  // Random string which shouldn't correspond with any text in the string
  const highlightConstant = 'BCZgbKNNlU';

  const splitOnOpen = string.split(`<${tag}>`);
  const finalSplit = splitOnOpen.map((newString) => {
    if (newString.includes(`</${tag}>`)) {
      return newString.split(`</${tag}>`);
    }
    return newString;
  });
  const finalArray = [];
  finalSplit.forEach((item) => {
    if (typeof item === 'string') {
      return finalArray.push(item);
    }
    item.forEach((splitItem, splitItemKey) => {
      if (splitItemKey === 0) {
        return finalArray.push(`${highlightConstant}${splitItem}`);
      }
      return finalArray.push(splitItem);
    });
    return false;
  });

  return finalArray.map((part, key) => {
    if (part.includes(highlightConstant)) {
      return (
        <span key={key} style={style}>
          {part.replace(highlightConstant, '')}
        </span>
      );
    }
    return <span key={key}>{part}</span>;
  });
};

Highlight.propTypes = HighlightTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
