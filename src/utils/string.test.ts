import { getDisplayShortHash } from './string'

describe('Strings utils', () => {
  test('getDisplayShortHash returns the right string', () => {
    expect(
      getDisplayShortHash('000003D6551FCD0DB8E636305FE75BE6817B214CC3ABEF03EF15208F336DE690'),
    ).toBe('0000...E690')
  })
})
