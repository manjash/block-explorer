import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

import containerStyle from '../../assets/jss/components/Container/containerStyle'

interface Prop extends BoxProps {
  children: React.ReactNode
  isLoading?: boolean
}

const useStyles = makeStyles(containerStyle)
const Container = (props: Prop) => {
  const classes = useStyles()
  const { children, ...cssProps } = props

  return (
    <Box className={classes.root} {...cssProps}>
      {children}
    </Box>
  )
}

export default Container
