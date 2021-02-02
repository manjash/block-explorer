export const debounce = (fn: Function, delay: number): any => {
  let timeoutId: number
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = (setTimeout(fn, delay) as unknown) as number
  }
}
