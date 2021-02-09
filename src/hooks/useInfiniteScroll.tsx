import { useState, useEffect } from 'react'
import { HEADER_HEIGHT } from '../assets/jss/theme'

export type DoneFunction = (lastPage: boolean) => void

const useInfiniteScroll = (
  window: Window,
  document: Document,
  fetchData: (done: DoneFunction) => void,
): boolean => {
  const [loadMore, setLoadMore] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const [hasMoreItems, setHasMoreItems] = useState(true)

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - HEADER_HEIGHT ||
      isFetching ||
      !hasMoreItems
    ) {
      return
    }
    setLoadMore(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleScroll])

  useEffect(() => {
    handleFetching()
    setLoadMore(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadMore])

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

  return isFetching
}

export default useInfiniteScroll
