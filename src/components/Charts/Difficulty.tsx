import React from 'react'

import Metric from '../../types/Metric'
import GeneralChart from './GeneralChart'

type Props = {
  data: Metric[]
}

export default function Difficulty({ data }: Props): JSX.Element {
  const yAccessor = React.useCallback((d: Metric) => Math.round(d.average_difficulty / 1e9), [])

  return <GeneralChart data={data} marginLeft={90} yAccessor={yAccessor} />
}
