import { useEffect, useState } from 'react'

import { Service, ServiceState } from '../types/Service'
import { ApiUrls } from './servicesUrls'

export interface ServicePayload<Type> {
  result: Type
}

interface Params {
  [key: string]: string
}

const useGetService = <Type>(url: ApiUrls, queryParams = {} as Params) => {
  const [result, setResult] = useState<Service<ServicePayload<Type>>>({
    status: ServiceState.LOADING,
  })

  const queryUrl = new URL(url)
  Object.keys(queryParams).forEach((key) => queryUrl.searchParams.append(key, queryParams[key]))

  const finalUrl = queryUrl.toString()

  useEffect(() => {
    fetch(finalUrl.toString())
      .then((response) => response.json())
      .then((response) =>
        setResult({ status: ServiceState.LOADED, payload: { result: response } }),
      )
      .catch((error) => setResult({ status: ServiceState.ERROR, error }))
  }, [finalUrl])

  return result
}

export default useGetService
