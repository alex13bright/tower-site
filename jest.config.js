module.exports = {
  roots: ['<rootDir>/app'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '~/*': '<rootDir>/app/$1',
  },
}
