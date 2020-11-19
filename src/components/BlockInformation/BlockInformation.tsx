import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import blockInformationStyle from '../../assets/jss/components/BlockInformation/blockInformationStyle'

interface Prop {
  title: any
  children: any
  icon: any
}
const useStyles = makeStyles(blockInformationStyle)

const BlockInformation = (props: Prop) => {
  const { title, children } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <props.icon className={classes.icon} />
        {title}
      </div>
      <Typography variant='body1'>{children}</Typography>
      <div className={classes.bar}>
        <div className={classes.inside} />
      </div>
    </div>
  )
}

export default BlockInformation
