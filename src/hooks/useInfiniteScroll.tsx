import { useState, useEffect } from 'react'

export type DoneFunction = (lastPage: boolean) => void

const useInfiniteScroll = (
  window: Window,
  document: Document,
  fetchData: (done: DoneFunction) => void,
): boolean => {
  const [isFetching, setIsFetching] = useState(false)
  const [hasMoreItems, setHasMoreItems] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleFetching = () => {
    if (isFetching || !hasMoreItems) return

    setIsFetching(true)

    fetchData((lastPage: boolean) => {
      setIsFetching(false)

      if (lastPage) {
        setHasMoreItems(false)
      }
    })
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching ||
      !hasMoreItems
    ) {
      return
    }
    handleFetching()
  }

  return isFetching
}

export default useInfiniteScroll
