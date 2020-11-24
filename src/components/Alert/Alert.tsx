import React from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import InfoIcon from '@material-ui/icons/Info'

import alertStyle from '../../assets/jss/components/Alert/alertStyle'

export enum AlertType {
  Error = 'error',
  Information = 'information',
}

interface Prop {
  title: string
  description: string
  type?: AlertType
}

const useStyles = makeStyles(alertStyle)

const Alert = ({ title, description, type = AlertType.Error }: Prop) => {
  const classes = useStyles()

  return (
    <Paper
      elevation={0}
      className={classNames(classes.root, {
        [classes[type]]: true,
      })}
    >
      <div className={classes.header}>
        {type === AlertType.Error && <ErrorOutlineIcon className={classes.icon} />}
        {type === AlertType.Information && <InfoIcon className={classes.icon} />}
        <Typography variant='h6'>{title}</Typography>
      </div>

      {description}
    </Paper>
  )
}

export default Alert
