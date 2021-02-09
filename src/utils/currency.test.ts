import { getIRFAmountWithCurrency, getIRFCurrencyAmount } from './currency'

describe('Currency utils', () => {
  test('getIRFAmountWithCurrency returns the right string', () => {
    expect(getIRFAmountWithCurrency(1234)).toEqual('app.units.currency.IRONAmount1,234')
  })

  test('getIRFCurrencyAmount returns the right string', () => {
    expect(getIRFCurrencyAmount(1234)).toEqual('1,234')
  })
})
