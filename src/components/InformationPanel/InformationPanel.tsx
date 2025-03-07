import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'

import architecture from '../../assets/images/informations/architecture.svg'
import blocksGray from '../../assets/images/breadcrumb/blocks-gray.svg'
import graffitiIcon from '../../assets/images/informations/graffiti.svg'
import hashIcon from '../../assets/images/informations/hashIcon.svg'
import reward from '../../assets/images/informations/reward.svg'
import sizeIcon from '../../assets/images/informations/sizeIcon.svg'
import transactionIcon from '../../assets/images/breadcrumb/transaction-gray.svg'
import timestampIcon from '../../assets/images/informations/timestamp.svg'
import spendsreceipt from '../../assets/images/informations/spendsreceipt.svg'

import Information from '../Information/Information'
import informationPanelStyle from '../../assets/jss/components/InformationPanel/informationPanelStyle'
import { getDisplayTimestamp, renderTimeSinceLastBlock } from '../../utils/time'
import { getDisplayShortHash } from '../../utils/string'

interface Prop {
  blockId?: number
  confirmations?: number
  timeSinceLastBlockMs?: number
  difficulty?: number
  fee?: string
  graffiti?: string
  isMinerFee?: boolean
  blockHash?: string
  transactionHash?: string
  height?: number
  size?: string
  spendsReceipts?: string
  timestamp?: Date
  transactions?: number
}

const useStyles = makeStyles(informationPanelStyle)

// This component is fairly verbose at this point. But the idea is to be flexible enough to start adding tooltips and other child components
const InformationPanel = ({
  confirmations,
  timeSinceLastBlockMs,
  difficulty,
  fee,
  graffiti,
  isMinerFee,
  blockHash,
  transactionHash,
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
      {height != undefined && (
        <Information icon={blocksGray} title={t('app.components.informationPanel.height')}>
          {String(height)}
        </Information>
      )}
      {blockHash && (
        <Information
          icon={hashIcon}
          copyString={blockHash}
          canCopy
          title={t('app.components.informationPanel.blockHash')}
        >
          {getDisplayShortHash(blockHash)}
        </Information>
      )}
      {transactionHash && (
        <Information
          copyString={transactionHash}
          canCopy
          icon={hashIcon}
          title={t('app.components.informationPanel.transactionHash')}
        >
          {getDisplayShortHash(transactionHash)}
        </Information>
      )}
      {graffiti && (
        <Information
          icon={graffitiIcon}
          largerIcon
          title={t('app.components.informationPanel.graffiti')}
        >
          {graffiti}
        </Information>
      )}
      {size && (
        <Information icon={sizeIcon} title={t('app.components.informationPanel.size')}>
          {size}
        </Information>
      )}
      {difficulty != undefined && (
        <Information
          icon={architecture}
          largerIcon
          title={t('app.components.informationPanel.difficulty')}
        >
          {String(difficulty)}
        </Information>
      )}
      {fee && (
        <Information
          icon={reward}
          title={
            isMinerFee
              ? t('app.components.informationPanel.minerFee')
              : t('app.components.informationPanel.fee')
          }
        >
          {fee}
        </Information>
      )}
      {transactions != undefined && (
        <Information
          icon={transactionIcon}
          title={t('app.components.informationPanel.transactions')}
        >
          {String(transactions)}
        </Information>
      )}
      {confirmations != undefined && (
        <Information
          icon={transactionIcon}
          title={t('app.components.informationPanel.confirmations')}
        >
          {String(confirmations)}
        </Information>
      )}
      {timestamp && (
        <Information
          icon={timestampIcon}
          title={t('app.components.informationPanel.timestamp')}
        >
          {getDisplayTimestamp(timestamp)}
        </Information>
      )}
      {spendsReceipts && (
        <Information
          icon={spendsreceipt}
          title={t('app.components.informationPanel.spendsReceipts')}
        >
          {spendsReceipts}
        </Information>
      )}
      {timeSinceLastBlockMs && (
        <Information
          icon={timestampIcon}
          title={t('app.components.informationPanel.timeSinceLastBlockMs')}
        >
          {renderTimeSinceLastBlock(timeSinceLastBlockMs)}
        </Information>
      )}
    </div>
  )
}

export default InformationPanel
