import { useEffect, useState } from 'react'

import { Service, ServiceState } from '../types/Service'
import { ApiUrls } from './servicesUrls'

export interface ServicePayload<Type> {
  result: Type
}

interface Params {
  [key: string]: string
}

// create your own format function to normalize the data coming from the API to the typed data
const defaultFormatFunction = (data: any) => data

const useGetService = <Type>(
  url: ApiUrls,
  queryParams = {} as Params,
  formatFunction = defaultFormatFunction,
) => {
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
        setResult({
          status: ServiceState.LOADED,
          payload: { result: formatFunction(response) },
        }),
      )
      .catch((error) => setResult({ status: ServiceState.ERROR, error }))
  }, [finalUrl, formatFunction])

  return result
}

export default useGetService
