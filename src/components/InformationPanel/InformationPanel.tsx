import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import LineWeightIcon from '@material-ui/icons/LineWeight'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import TimerIcon from '@material-ui/icons/Timer'
import WidgetsIcon from '@material-ui/icons/Widgets'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import ReceiptIcon from '@material-ui/icons/Receipt'

import Information from '../Information/Information'
import informationPanelStyle from '../../assets/jss/components/InformationPanel/informationPanelStyle'
import { getDisplayTimestamp } from '../../utils/time'

interface Prop {
  blockId?: number
  confirmations?: number
  difficulty?: number
  fee?: string
  height?: number
  size?: string
  spendsReceipts?: string
  timestamp?: Date
  transactions?: number
}

const useStyles = makeStyles(informationPanelStyle)

// This component is fairly verbose at this point. But the idea is to be flexible enough to start adding tooltips and other child components
const InformationPanel = ({
  blockId,
  confirmations,
  difficulty,
  fee,
  height,
  size,
  spendsReceipts,
  transactions,
  timestamp,
}: Prop) => {
  const { t } = useTranslation()

  const classes = useStyles()

  return (
    <div className={classes.root}>
      {blockId && (
        <Information icon={WidgetsIcon} title={t('app.components.informationPanel.blockId')}>
          {blockId}
        </Information>
      )}
      {fee && (
        <Information icon={MonetizationOnIcon} title={t('app.components.informationPanel.fee')}>
          {fee}
        </Information>
      )}
      {confirmations && (
        <Information
          icon={ConfirmationNumberIcon}
          title={t('app.components.informationPanel.confirmations')}
        >
          {confirmations}
        </Information>
      )}
      {height && (
        <Information icon={LineWeightIcon} title={t('app.components.informationPanel.height')}>
          {height}
        </Information>
      )}
      {size && (
        <Information icon={FitnessCenterIcon} title={t('app.components.informationPanel.size')}>
          {size}
        </Information>
      )}
      {transactions && (
        <Information
          icon={AccountTreeIcon}
          title={t('app.components.informationPanel.transactions')}
        >
          {transactions}
        </Information>
      )}
      {difficulty && (
        <Information
          icon={AllInclusiveIcon}
          title={t('app.components.informationPanel.difficulty')}
        >
          {difficulty}
        </Information>
      )}
      {timestamp && (
        <Information icon={TimerIcon} title={t('app.components.informationPanel.timestamp')}>
          {getDisplayTimestamp(timestamp)}
        </Information>
      )}
      {spendsReceipts && (
        <Information
          icon={ReceiptIcon}
          title={t('app.components.informationPanel.spendsReceipts')}
        >
          {spendsReceipts}
        </Information>
      )}
    </div>
  )
}

export default InformationPanel
