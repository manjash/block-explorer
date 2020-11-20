import React from 'react'
import { useTranslation } from 'react-i18next'

import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import TimerIcon from '@material-ui/icons/Timer'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import HttpsIcon from '@material-ui/icons/Https'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import LocalActivityIcon from '@material-ui/icons/LocalActivity'
import LineWeightIcon from '@material-ui/icons/LineWeight'
import { makeStyles } from '@material-ui/core/styles'

import Stat from './Stat'
import metricsStyle from '../../assets/jss/components/Dashboard/metricsStyle'

const useStyles = makeStyles(metricsStyle)

const Metrics = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Stat
        title={t('app.dashboard.metrics.difficulty')}
        icon={AllInclusiveIcon}
        priority='high'
      >
        198466363744
      </Stat>
      <Stat title={t('app.dashboard.metrics.height')} icon={LineWeightIcon} priority='medium'>
        2227124
      </Stat>
      <Stat title={t('app.dashboard.metrics.hashrate')} icon={TrendingUpIcon} priority='low'>
        1653.9 Mh/s
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.reward')}
        icon={LocalActivityIcon}
        priority='verylow'
      >
        17753210
      </Stat>
      <Stat title={t('app.dashboard.metrics.latesthash')} icon={HttpsIcon} priority='verylow'>
        7d1...ba8d
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.latesttransaction')}
        icon={AccountTreeIcon}
        priority='low'
      >
        23
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.latestblocksseconds')}
        icon={TimerIcon}
        priority='medium'
      >
        12s
      </Stat>
      <Stat
        title={t('app.dashboard.metrics.circulation')}
        icon={AccountBalanceIcon}
        priority='high'
      >
        7,532 IRF
      </Stat>
    </div>
  )
}

export default Metrics
