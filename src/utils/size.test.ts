import { getSizeInBytes, getDisplaySizeInBytes } from './size'

describe('Size utils', () => {
  test('getSizeInBytes returns the right string', () => {
    expect(getSizeInBytes(1234)).toEqual({ size: '1.21', unit: 'KB' })
    expect(getSizeInBytes(0)).toEqual({ size: '0', unit: 'B' })
  })

  test('getDisplaySizeInBytes returns the right string', () => {
    expect(getDisplaySizeInBytes(1234)).toEqual('app.units.size.bytes1.21,KB')
    expect(getDisplaySizeInBytes(0)).toEqual('app.units.size.bytes0,B')
  })
})
