import i18n from 'i18next'

export const getDisplayTimeInSeconds = (time: number | string): string => {
  return i18n.t('app.units.time.seconds', { time })
}

export const getDisplayTimestamp = (timestamp: Date | string): string => {
  if (typeof timestamp === 'string') timestamp = new Date(timestamp)
  return `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString().replace(' ', '')}`
}
