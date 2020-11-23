import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import boxWrapperStyle from '../../assets/jss/components/BoxWrapper/boxWrapperStyle'
import Loading from '../Loading/Loading'

interface Prop {
  title: string
  children: React.ReactNode
  isLoading?: boolean
  marginBottom?: number
}

const useStyles = makeStyles(boxWrapperStyle)
const BoxWrapper = ({ children, isLoading = false, title, marginBottom = 0 }: Prop) => {
  const classes = useStyles()

  return (
    <Box padding={2} className={classes.root} marginBottom={marginBottom}>
      <Typography variant='h6' className={classes.header}>
        {title}
      </Typography>
      {isLoading && <Loading />}

      {children}
    </Box>
  )
}

export default BoxWrapper
