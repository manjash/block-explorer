export function debounce<T extends unknown[], U>(
  callback: (...args: T) => PromiseLike<U> | U,
  wait: number,
): (...args: T) => Promise<U> | U {
  let timer: NodeJS.Timeout

  return (...args: T): Promise<U> | U => {
    clearTimeout(timer)
    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(callback(...args)), wait)
    })
  }
}
