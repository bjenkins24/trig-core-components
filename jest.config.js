const path = require('path');

module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', path.resolve(__dirname, 'src')],
  testPathIgnorePatterns: ['node_modules', '.git'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    'jest-styled-components',
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!dist/src/**/*.js',
    '!**/src/test/**/*.js',
    '!**/src/index.js',
    '!**/src/Icon/icons/**/*.js',
    '!**/src/Lists/index.js',
    '!**/src/utils/index.js',
    '!**/src/Form/index.js',
    '!**/src/Buttons/index.js',
    '!**/src/Tabs/index.js',
    '!**/src/utils/mapLinkToIcon.js',
  ],
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 97,
      functions: 99,
      lines: 99,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
