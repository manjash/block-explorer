import React, { ReactNode } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar'

import layoutStyle from '../../assets/jss/components/layoutStyle'
import themeIronFish from '../../assets/jss/theme'
import { RouteValidator } from '../../routes'

interface Props {
  children: ReactNode
  routes: RouteValidator[]
}

const useStyles = makeStyles(layoutStyle)

const Layout = ({ children, routes }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      <ThemeProvider theme={themeIronFish}>
        <CssBaseline />

        <div className={classes.wrapper}>
          {!isSmallBreakpoint && <Sidebar routes={routes} />}
          <div>
            <Header isSmallBreakpoint={isSmallBreakpoint} />
            <main className={classes.content}>{children}</main>
          </div>
          {isSmallBreakpoint && <MobileNavBar routes={routes} />}
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
