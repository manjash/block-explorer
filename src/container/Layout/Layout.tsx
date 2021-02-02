import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import Header from '../../components/Header/Header'

import layoutStyle from '../../assets/jss/containers/layoutStyle'
import { RouteValidator } from '../../routes/routeSwitch'
import Footer from '../../components/Footer/Footer'
import { RoutePath } from '../../routes/routePath'

interface Props {
  children: ReactNode
  routes: RouteValidator[]
}

const useStyles = makeStyles(layoutStyle)

const Layout = ({ children }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  let location = useLocation()
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))

  // Dashboard has search in the splash page
  const showSearch = location && location.pathname !== RoutePath.Dashboard
  // Explore page has infinite scroll
  const showFooter = location && location.pathname !== RoutePath.Explorer

  return (
    <>
      <div className={classes.root}>
        <Header isSmallBreakpoint={isSmallBreakpoint} isTop showSearch={showSearch} />
        <main className={classes.content}>{children}</main>
        {showFooter && <Footer />}
      </div>
    </>
  )
}

export default Layout
