import { getBlockDetailPageUrl, getTransactionDetailPageUrl } from './routes'

describe('Routes utils', () => {
  test('getBlockDetailPageUrl return the right URL', () => {
    expect(getBlockDetailPageUrl(123)).toEqual('/blocks/123')
  })

  test('getTransactionDetailPageUrl return the right URL', () => {
    expect(getTransactionDetailPageUrl('block1', '123')).toEqual('/transaction/123/block1?')
  })
})
