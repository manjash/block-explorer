import React from 'react'
import { useTranslation } from 'react-i18next'

import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import TimerIcon from '@material-ui/icons/Timer'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import HttpsIcon from '@material-ui/icons/Https'
import LineWeightIcon from '@material-ui/icons/LineWeight'
import { makeStyles } from '@material-ui/core/styles'

import Stat from './Stat'
import metricsStyle from '../../assets/jss/components/Dashboard/metricsStyle'
import { getDisplayTimeInSeconds } from '../../utils/time'
import { getDisplayShortHash } from '../../utils/string'

const useStyles = makeStyles(metricsStyle)

export interface MetricsData {
  blockTime: number | null
  difficulty: number | null
  height: number | null
  latestHash: string | null
  transactionsCount: number | null
}

interface Prop {
  metrics: MetricsData
}

const Metrics = ({ metrics }: Prop) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Stat
        title={t('app.dashboard.metrics.difficulty')}
        icon={AllInclusiveIcon}
        priority='high'
      >
        {metrics.difficulty || 0}
      </Stat>
      <Stat title={t('app.dashboard.metrics.height')} icon={LineWeightIcon} priority='medium'>
        {metrics.height || 0}
      </Stat>
      <Stat title={t('app.dashboard.metrics.latesthash')} icon={HttpsIcon} priority='verylow'>
        {getDisplayShortHash(metrics.latestHash || '0000000000000000000000000')}
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.latesttransaction')}
        icon={AccountTreeIcon}
        priority='low'
      >
        {metrics.transactionsCount || 0}
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.latestblocksseconds')}
        icon={TimerIcon}
        priority='medium'
      >
        {getDisplayTimeInSeconds(Math.round(metrics.blockTime || 0))}
      </Stat>
    </div>
  )
}

export default Metrics
