import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import statStyle from '../../assets/jss/components/Dashboard/statStyle'

const useStyles = makeStyles(statStyle)
interface Prop {
  icon: string
  title: string
  children: React.ReactNode
  priority: 'high' | 'medium' | 'low' | 'verylow'
}

const Stat = (props: Prop) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant='subtitle2' className={classes.header}>
          {props.title}
        </Typography>
        <Typography variant='body1'>{props.children}</Typography>
      </div>
      <div className={classes.iconWrapper}>
        <img src={props.icon} role='presentation' />
      </div>
    </div>
  )
}

export default Stat
