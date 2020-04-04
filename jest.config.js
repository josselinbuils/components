module.exports = {
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 85,
      statements: 85
    }
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['<rootDir>/src/**/{test,__tests__}/**/*.{js,jsx,ts,tsx}'],
  transform: {
    '\\.jsx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules']
};
