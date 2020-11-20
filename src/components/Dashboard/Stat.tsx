import React from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import statStyle from '../../assets/jss/components/Dashboard/statStyle'

const useStyles = makeStyles(statStyle)
interface Prop {
  icon: React.ElementType
  title: string
  children: React.ReactNode
  priority: 'high' | 'medium' | 'low' | 'verylow'
}

type WrapperClassName = 'wrapper-high' | 'wrapper-medium' | 'wrapper-low' | 'wrapper-verylow'

const Stat = (props: Prop) => {
  const classes = useStyles()
  const wrapperClassName: WrapperClassName = `wrapper-${props.priority}` as WrapperClassName

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classNames(classes.iconWrapper, { [classes[wrapperClassName]]: true })}>
          <props.icon className={classNames(classes.icon)} />
        </div>
        {props.title}
      </div>
      <Typography variant='h4'>{props.children}</Typography>
      <div className={classes.bar}>
        <div className={classNames(classes.inside, { [classes[wrapperClassName]]: true })} />
      </div>
    </div>
  )
}

export default Stat
