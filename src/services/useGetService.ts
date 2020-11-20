import { useEffect, useState } from 'react'

import Block from '../types/Block'
import { Service, ServiceState } from '../types/Service'
import { ApiUrls } from './servicesUrls'

export interface ServicePayload {
  result: Block
}

const useGetService = (url: ApiUrls) => {
  const [result, setResult] = useState<Service<ServicePayload>>({
    status: ServiceState.LOADING,
  })

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) =>
        setResult({ status: ServiceState.LOADED, payload: { result: response } }),
      )
      .catch((error) => setResult({ status: ServiceState.ERROR, error }))
  }, [url])

  return result
}

export default useGetService
