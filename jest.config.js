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
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-background-actions)/)',
  ],
};
