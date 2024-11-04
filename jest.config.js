module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'json-summary', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './src/utils': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-background-actions)/)',
  ],
};
