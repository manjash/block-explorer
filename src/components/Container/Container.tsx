import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

import containerStyle from '../../assets/jss/components/Container/containerStyle'
import Loading from '../Loading/Loading'

interface Prop extends BoxProps {
  children: React.ReactNode
  isLoading?: boolean
}

const useStyles = makeStyles(containerStyle)
const Container = (props: Prop) => {
  const classes = useStyles()
  const { children, isLoading, ...cssProps } = props

  return (
    <Box className={classes.root} {...cssProps}>
      {isLoading ? <Loading /> : children}
    </Box>
  )
}

export default Container
