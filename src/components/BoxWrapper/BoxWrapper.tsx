import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box, { BoxProps } from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import boxWrapperStyle from '../../assets/jss/components/BoxWrapper/boxWrapperStyle'
import Loading from '../Loading/Loading'

interface Prop extends BoxProps {
  title: string
  children: React.ReactNode
  isLoading?: boolean
}

const useStyles = makeStyles(boxWrapperStyle)
const BoxWrapper = (props: Prop) => {
  const classes = useStyles()
  const { children, isLoading = false, title, ...cssProps } = props

  return (
    <Box padding={2} className={classes.root} {...cssProps}>
      <Typography variant='h6' className={classes.header}>
        {title}
      </Typography>
      {isLoading && <Loading />}

      {children}
    </Box>
  )
}

export default BoxWrapper
