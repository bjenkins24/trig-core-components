import React from 'react';

const MockDate = require('mockdate');

MockDate.set('2000-11-22');

// https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});

jest.mock('@material-ui/core/ClickAwayListener', () => {
  return ({ children }) => <div>{children}</div>;
});

jest.mock('@material-ui/core/Grow', () => {
  return ({ children }) => <div>{children}</div>;
});

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};
