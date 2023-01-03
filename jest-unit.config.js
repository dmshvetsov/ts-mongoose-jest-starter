/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [path.join(__dirname, 'src/**/__tests__/**/*.test.[jt]s')]
}
