jest.spyOn(console, 'info')
// eslint-disable-next-line import/first
import '../index'

test('it works', () => {
  expect(console.info).toBeCalledWith('Start here src/index.js')
})
