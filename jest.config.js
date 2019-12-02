const path = require('path');

module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', path.resolve(__dirname, 'src')],
  testPathIgnorePatterns: ['node_modules', '.git'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    'jest-styled-components',
    '@testing-library/jest-dom/extend-expect',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!dist/src/**/*.js',
    '!**/src/test/**/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 19,
      branches: 7,
      lines: 19,
      functions: 19,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
