import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { AppBar } from '@material-ui/core'

import { RouteValidator } from '../../routes/routeSwitch'
import mobileNavBarStyle from '../../assets/jss/components/MobileNavBar/mobileNavBarStyle'

const useStyles = makeStyles(mobileNavBarStyle)

interface Props {
  routes: RouteValidator[]
}

const MobileNavBar = ({ routes }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const location = useLocation()

  const [navigationValue, setNavigationValue] = React.useState(location.pathname)

  return (
    <AppBar className={classes.root} component='div'>
      <BottomNavigation
        value={navigationValue}
        onChange={(event, newValue) => {
          setNavigationValue(newValue)
        }}
        showLabels
      >
        {routes.map((route: RouteValidator) => {
          return (
            route.path &&
            route.isVisibleInSidebar && (
              <BottomNavigationAction
                component={NavLink}
                to={route.path}
                value={route.path}
                key={route.nameKey}
                label={t(route.nameKey)}
                icon={<route.icon />}
              />
            )
          )
        })}
      </BottomNavigation>
    </AppBar>
  )
}

export default MobileNavBar
