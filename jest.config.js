const sourceNameMapper = {
  '@/(.*)$': '<rootDir>/src/$1',
}
const styleNameMapper = {
  '\\.(css|less|scss|sass)$': '<rootDir>/src/tests/mocks/EmptyObjectMock.js',
}
const imageNameMapper = {
  '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/src/tests/mocks/EmptyObjectMock.js',
  '\\?url$': '<rootDir>/src/tests/mocks/EmptyObjectMock.js',
}
const librariesNameMapper = {
  '^lodash-es$': 'lodash',
}

module.exports = {
  globals: {
    // @see https://stackoverflow.com/a/60905543
    'ts-jest': { isolatedModules: true },
  },
  moduleNameMapper: {
    ...styleNameMapper,
    ...imageNameMapper,
    ...sourceNameMapper,
    ...librariesNameMapper,
  },
  setupFilesAfterEnv: ['./src/tests/setup/jest.setup.after-env.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/cypress/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
