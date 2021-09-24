import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'

import { Service, ServiceState } from '../types/Service'

export interface ServicePayload<Type> {
  result: Type
}

// create your own format function to normalize the data coming from the API to the typed data
const defaultFormatFunction = (data: any) => data

const useGetService = <Type>(
  url: string,
  queryParams: any = {},
  formatFunction = defaultFormatFunction,
) => {
  const [result, setResult] = useState<Service<ServicePayload<Type>>>({
    status: ServiceState.LOADING,
  })

  const params = useMemo(() => new URLSearchParams(queryParams), [queryParams])
  const queryString = params.toString()

  useEffect(() => {
    axios
      .get(url + queryString)
      .then((response) =>
        setResult({
          status: ServiceState.LOADED,
          payload: { result: formatFunction(response.data) },
        }),
      )
      .catch((error) => setResult({ status: ServiceState.ERROR, error }))
  }, [url, queryString, formatFunction])

  return result
}

export default useGetService
