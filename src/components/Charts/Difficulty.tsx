import React from 'react'

import Metric from '../../types/Metric'
import GeneralChart from './GeneralChart'

type Props = {
  data: Metric[]
}

export default function Difficulty({ data }: Props): JSX.Element {
  const yAccessor = React.useCallback((d: Metric) => d.average_difficulty, [])

  return <GeneralChart data={data} marginLeft={90} yAccessor={yAccessor} />
}
