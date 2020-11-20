import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'

import boxWrapperStyle from '../../assets/jss/components/BoxWrapper/boxWrapperStyle'

interface Prop {
  title: string
  children: React.ReactNode
}

const useStyles = makeStyles(boxWrapperStyle)
const BoxWrapper = ({ children, title }: Prop) => {
  const classes = useStyles()

  return (
    <Box padding={2} className={classes.root}>
      <Typography variant='h6' className={classes.header}>
        {title}
      </Typography>

      {children}
    </Box>
  )
}

export default BoxWrapper
