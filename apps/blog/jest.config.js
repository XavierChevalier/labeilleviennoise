const sourceNameMapper = {
  '@/(.*)$': '<rootDir>/app/$1',
}
const styleNameMapper = {
  '\\.(css|less|scss|sass)$': '<rootDir>/app/tests/mocks/EmptyObjectMock.js',
}
const imageNameMapper = {
  '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/app/tests/mocks/EmptyObjectMock.js',
  '\\?url$': '<rootDir>/app/tests/mocks/EmptyObjectMock.js',
}
const librariesNameMapper = {
  '^lodash-es$': 'lodash',
}

module.exports = {
  moduleNameMapper: {
    ...styleNameMapper,
    ...imageNameMapper,
    ...sourceNameMapper,
    ...librariesNameMapper,
  },
  setupFilesAfterEnv: ['./app/tests/setup/jest.setup.after-env.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/cypress/'],
  transform: {
    // @see https://stackoverflow.com/a/60905543
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
  },
}
