import React, { ReactNode } from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar'

import layoutStyle from '../../assets/jss/containers/layoutStyle'
import { RouteValidator } from '../../routes/routeSwitch'

interface Props {
  children: ReactNode
  routes: RouteValidator[]
}

const useStyles = makeStyles(layoutStyle)

const Layout = ({ children, routes }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      {isSmallBreakpoint && <MobileNavBar routes={routes} />}
      <div className={classes.root}>
        {!isSmallBreakpoint && <Sidebar routes={routes} />}
        <div className={classes.wrapper}>
          <Header isSmallBreakpoint={isSmallBreakpoint} />
          <main className={classes.content}>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
