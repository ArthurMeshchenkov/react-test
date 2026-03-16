module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  };