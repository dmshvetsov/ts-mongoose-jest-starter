import { User } from '../src/models'
import { setup, teardown, resetCollection } from './helpers'

setup()
teardown()

beforeEach(async () => {
  resetCollection(User)
})

test('it works', async () => {
  await User.create({ email: 'dmshvetsov@example.com', website: 'dmitryshvetsov.com' })
  const user = await User.findOne({ email: 'dmshvetsov@example.com' })
  expect(user.website).toBe('dmitryshvetsov.com')
})
