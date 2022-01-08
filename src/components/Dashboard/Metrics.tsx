import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'

import hashrate from '../../assets/images/metrics/hashrate.svg'
import reward from '../../assets/images/metrics/reward.svg'
import supply from '../../assets/images/metrics/supply.svg'
import time from '../../assets/images/metrics/time.svg'
import totaltransaction from '../../assets/images/metrics/totaltransaction.svg'
import transactions from '../../assets/images/metrics/transactions.svg'

import Stat from './Stat'
import metricsStyle from '../../assets/jss/components/Dashboard/metricsStyle'
import { getDisplayTimeInSeconds } from '../../utils/time'
import { getDisplayShortHash } from '../../utils/string'
import { round } from '../../utils/mathUtils'

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
      <Stat title={t('app.dashboard.metrics.difficulty')} icon={hashrate} priority='high'>
        {metrics.difficulty || 0}
      </Stat>
      <Stat title={t('app.dashboard.metrics.height')} icon={reward} priority='medium'>
        {metrics.height || 0}
      </Stat>
      <Stat title={t('app.dashboard.metrics.latesthash')} icon={supply} priority='verylow'>
        {getDisplayShortHash(metrics.latestHash || '0000000000000000000000000')}
      </Stat>
      <Stat title={t('app.dashboard.metrics.latesttransaction')} icon={time} priority='low'>
        {metrics.transactionsCount || 0}
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.latestblocksseconds')}
        icon={totaltransaction}
        priority='medium'
      >
        {metrics.blockTime ? getDisplayTimeInSeconds(round(metrics.blockTime / 1000, 2)) : '∞'}
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.latestblocksseconds')}
        icon={transactions}
        priority='medium'
      >
        {metrics.blockTime ? getDisplayTimeInSeconds(round(metrics.blockTime / 1000, 2)) : '∞'}
      </Stat>
    </div>
  )
}

export default Metrics
