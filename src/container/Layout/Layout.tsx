import React, { ReactNode } from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import Header from '../../components/Header/Header'

import layoutStyle from '../../assets/jss/containers/layoutStyle'
import { RouteValidator } from '../../routes/routeSwitch'
import Footer from '../../components/Footer/Footer'

interface Props {
  children: ReactNode
  routes: RouteValidator[]
}

const useStyles = makeStyles(layoutStyle)

const Layout = ({ children }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <div className={classes.root}>
        <Header isSmallBreakpoint={isSmallBreakpoint} />
        <main className={classes.content}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
