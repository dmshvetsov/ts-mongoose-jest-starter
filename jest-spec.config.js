/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [path.join(__dirname, 'spec/**/*.spec.ts')]
}
