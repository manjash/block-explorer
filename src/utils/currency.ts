import i18n from 'i18next'

export const getIRFAmountWithCurrency = (amount: number): string => {
  return i18n.t('app.units.currency.IRFAmount', { amount: getIRFCurrencyAmount(amount) })
}

export const getIRFCurrencyAmount = (amount: number): string => {
  return amount.toLocaleString()
}
