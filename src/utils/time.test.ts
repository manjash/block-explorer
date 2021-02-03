import { getDisplayTimeInSeconds, getDisplayTimestamp } from './time'

describe('Time utils', () => {
  test('getIRFAmountWithCurrency returns the right string', () => {
    expect(getDisplayTimeInSeconds(1234)).toEqual('app.units.time.seconds1234')
  })

  test('getDisplayTimestamp returns the right string', () => {
    const date = new Date('2020-01-01 10:10:10')
    expect(getDisplayTimestamp(date)).toEqual('1/1/2020 10:10:10AM')
  })
})
