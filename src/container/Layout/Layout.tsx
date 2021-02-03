import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { RouteValidator } from '../../routes/routeSwitch'
import { RoutePath } from '../../routes/routePath'
import layoutStyle from '../../assets/jss/containers/layoutStyle'

interface Props {
  children: ReactNode
  routes: RouteValidator[]
}

const useStyles = makeStyles(layoutStyle)

const Layout = ({ children }: Props) => {
  const classes = useStyles()
  let location = useLocation()

  // Dashboard has search in the splash page
  const showSearch = location && location.pathname !== RoutePath.Dashboard
  // Explore page has infinite scroll
  const showFooter = location && location.pathname !== RoutePath.Explorer

  return (
    <div className={classes.root}>
      <Header isTop isSticky={showSearch} showSearch={showSearch} />
      <main
        className={classNames(classes.content, {
          [classes.noPadding]: !showSearch,
        })}
      >
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
