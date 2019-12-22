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
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!dist/src/**/*.js',
    '!**/src/test/**/*.js',
    '!**/src/index.js',
    '!**/src/Lists/index.js',
    '!**/src/utils/index.js',
    '!**/src/Form/index.js',
    '!**/src/Buttons/index.js',
    '!**/src/Tabs/index.js',
  ],
  coverageThreshold: {
    global: {
      statements: 65,
      branches: 44,
      lines: 66,
      functions: 63,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
