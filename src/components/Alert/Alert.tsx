import React from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import info from '../../assets/images/info.svg'
import alertStyle from '../../assets/jss/components/Alert/alertStyle'

export enum AlertType {
  Error = 'error',
  Information = 'information',
}

interface Prop {
  title: string
  children?: React.ReactNode
  type?: AlertType
}

const useStyles = makeStyles(alertStyle)

const Alert = ({ title, children, type = AlertType.Error }: Prop) => {
  const classes = useStyles()

  return (
    <Paper
      elevation={0}
      className={classNames(classes.root, {
        [classes[type]]: true,
      })}
    >
      <div className={classes.header}>
        {type === AlertType.Error && (
          <img src={info} role='presentation' className={classes.icon} />
        )}
        <Typography variant='h5' className={classes.title}>
          {title}
        </Typography>
      </div>

      {children}
    </Paper>
  )
}

export default Alert
