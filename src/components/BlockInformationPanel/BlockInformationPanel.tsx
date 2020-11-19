import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import LineWeightIcon from '@material-ui/icons/LineWeight'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import TimerIcon from '@material-ui/icons/Timer'

import BlockInformation from '../BlockInformation/BlockInformation'
import Block from '../../types/Block'
import blockInformationPanelStyle from '../../assets/jss/components/BlockInformationPanel/blockInformationPanelStyle'

interface Prop {
  block: Block
}

const useStyles = makeStyles(blockInformationPanelStyle)

const BlockInformationPanel = ({ block }: Prop) => {
  const { t } = useTranslation()

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <BlockInformation
        icon={LineWeightIcon}
        title={t('app.blockDetailPage.informationPanel.height')}
      >
        {block.height}
      </BlockInformation>
      <BlockInformation
        icon={FitnessCenterIcon}
        title={t('app.blockDetailPage.informationPanel.size')}
      >
        {block.size}
      </BlockInformation>
      <BlockInformation
        icon={AccountTreeIcon}
        title={t('app.blockDetailPage.informationPanel.transactions')}
      >
        {block.transactions}
      </BlockInformation>
      <BlockInformation
        icon={AllInclusiveIcon}
        title={t('app.blockDetailPage.informationPanel.difficulty')}
      >
        {block.difficulty}
      </BlockInformation>
      <BlockInformation
        icon={TimerIcon}
        title={t('app.blockDetailPage.informationPanel.timestamp')}
      >
        {block.timestamp}
      </BlockInformation>
    </div>
  )
}

export default BlockInformationPanel
