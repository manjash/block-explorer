import React from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import informationStyle from '../../assets/jss/components/Information/informationStyle'
import { copyToClipboard } from '../../utils/copyToClipboard'

interface Prop {
  canCopy?: boolean
  title: string
  children: string
  icon: string
  copyString?: string
}
const useStyles = makeStyles(informationStyle)

const Information = ({ canCopy, title, icon, copyString, children }: Prop) => {
  const { t } = useTranslation()
  const classes = useStyles()

  const copyClick = () => {
    if (canCopy === true && copyString != undefined) copyToClipboard(copyString)
  }
  return (
    <div
      className={classNames(classes.root, {
        copy: canCopy === true,
      })}
      onClick={copyClick}
      title={canCopy === true ? t('app.navigation.copy') : ''}
    >
      <div className={classes.icon}>
        <img src={icon} role='presentation' />
      </div>
      <div className={classes.content}>
        <Typography variant='subtitle2'>{title}</Typography>
        <Typography variant='body1'>{children}</Typography>
      </div>
    </div>
  )
}

export default Information
