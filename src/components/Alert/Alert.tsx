import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

import alertStyle from '../../assets/jss/components/Alert/alertStyle'

interface Prop {
  title: string
  description: string
}

const useStyles = makeStyles(alertStyle)

const Alert = ({ title, description }: Prop) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.header}>
        <ErrorOutlineIcon className={classes.icon} />
        <Typography variant='h6'>{title}</Typography>
      </div>

      {description}
    </Paper>
  )
}

export default Alert
