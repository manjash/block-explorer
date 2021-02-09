import React from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import informationStyle from '../../assets/jss/components/Information/informationStyle'
import CopyElement from '../CopyElement/CopyElement'

interface Prop {
  canCopy?: boolean
  largerIcon?: boolean
  title: string
  children: string
  icon: string
  copyString?: string
}
const useStyles = makeStyles(informationStyle)

const Information = ({ largerIcon, canCopy, title, icon, copyString, children }: Prop) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classNames(classes.icon, { [classes.largeIcon]: largerIcon || false })}>
        <img src={icon} role='presentation' />
      </div>
      <div className={classes.content}>
        <Typography variant='subtitle2'>{title}</Typography>
        {canCopy && copyString && (
          <CopyElement copyString={copyString}>
            <Typography variant='body1'>{children}</Typography>
          </CopyElement>
        )}
        {!canCopy && <Typography variant='body1'>{children}</Typography>}
      </div>
    </div>
  )
}

export default Information
