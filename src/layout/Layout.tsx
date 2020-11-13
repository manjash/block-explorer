import React, { ReactNode } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import Sidebar from '../components/Sidebar/Sidebar'

import layoutStyle from '../assets/jss/components/layoutStyle'
import theme from '../assets/jss/theme'
import { RouteValidator } from '../routes'

interface Props {
  children: ReactNode
  routes: RouteValidator[]
}

const useStyles = makeStyles(layoutStyle)

const Layout = ({ children, routes }: Props) => {
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className={classes.wrapper}>
          <Sidebar routes={routes} />
          <main className={classes.content}>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
