import i18n from 'i18next'

interface Size {
  size: string
  unit: string
}

export const getSizeInBytes = (bytes: number): Size => {
  const suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))

  return {
    size: !bytes ? '0' : (bytes / Math.pow(1024, i)).toFixed(2),
    unit: !bytes ? suffixes[0] : suffixes[i],
  }
}

export const getDisplaySizeInBytes = (bytes: number): string => {
  return i18n.t('app.units.size.bytes', getSizeInBytes(bytes))
}
