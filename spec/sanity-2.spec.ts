import { User } from '../src/models'
import { setup, teardown, resetCollection } from './helpers'

/**
 * each jest suite (file) runs in a separate worker and can be executed concurrently
 * depending jest maxConcurrency configuration option
 *
 * another test suite is needed to verify that the project setup working well
 * with concurrency and tests are not interfere with each other
 */

setup()
teardown()

beforeEach(async () => {
  resetCollection(User)
})

test('it works', async () => {
  await User.create({})
  expect(await User.countDocuments()).toBe(1)
})
