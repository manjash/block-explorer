import Block from '../types/Block'
import { ServiceState } from '../types/Service'

interface state {
  status: ServiceState
  error: string
  blocks: Block[]
}

export function saveToLocalStorage(key: string, value: null | state) {
  if (typeof localStorage === 'undefined') return

  try {
    if (!value) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  } catch (e) {
    console.debug('Local storage is disabled - refresh page required')
  }
}

export function getFromLocalStorage(key: string) {
  if (typeof localStorage === 'undefined') return

  let value = null
  try {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      value = JSON.parse(storedValue)
    }
  } catch (e) {
    console.debug('Local storage is disabled - refresh page required')
  }

  return value
}
