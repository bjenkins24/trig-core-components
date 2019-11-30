module.exports = {
  testPathIgnorePatterns: [`node_modules`, `.git`],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
