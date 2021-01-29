import axios from 'axios'
import { useEffect, useState } from 'react'
import { networkIdentifier } from '../config'

import { Service, ServiceState } from '../types/Service'
import { ApiUrls } from './servicesUrls'

export interface ServicePayload<Type> {
  result: Type
}

// create your own format function to normalize the data coming from the API to the typed data
const defaultFormatFunction = (data: any) => data

const useGetService = <Type>(
  url: ApiUrls,
  queryParams: any = {},
  formatFunction = defaultFormatFunction,
) => {
  const [result, setResult] = useState<Service<ServicePayload<Type>>>({
    status: ServiceState.LOADING,
  })

  const params = JSON.stringify({
    network_identifier: networkIdentifier,
    ...queryParams,
  })

  useEffect(() => {
    axios
      .post(url, JSON.parse(params))
      .then((response) =>
        setResult({
          status: ServiceState.LOADED,
          payload: { result: formatFunction(response.data) },
        }),
      )
      .catch((error) => setResult({ status: ServiceState.ERROR, error }))
  }, [url, params, formatFunction])

  return result
}

export default useGetService
