module.exports = {
  // roots: ['<rootDir>/tests'],
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  // moduleNameMapper: {
  //   '@/tests/(.*)': '<rootDir>/tests/$1',
  //   '@/(.*)': '<rootDir>/src/$1'
  // }
}