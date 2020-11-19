import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import sidebarStyle from '../../assets/jss/components/Sidebar/sidebarStyle'
import { RouteValidator } from '../../routes'
import logo from '../../assets/images/logo.svg'
import Ad from './Ad'

interface Props {
  routes: RouteValidator[]
}

const useStyles = makeStyles(sidebarStyle)

const Sidebar = ({ routes }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const displayAd = useMediaQuery('(min-height:650px)')

  const links = (
    <List className={classes.list}>
      {routes.map((route: RouteValidator) => {
        const listItem = (
          <ListItem button className={classes.itemLink}>
            <route.icon className={classNames(classes.itemIcon)} />

            <ListItemText
              primary={t(route.nameKey)}
              className={classNames(classes.itemText)}
              disableTypography
            />

            <ChevronRightIcon />
          </ListItem>
        )

        if (route.isVisibleInSidebar && route.path !== undefined) {
          return (
            <NavLink
              to={route.path}
              className={classes.item}
              activeClassName={classes.itemActive}
              key={route.nameKey}
            >
              {listItem}
            </NavLink>
          )
        }
        return (
          route.isVisibleInSidebar && (
            // these are links that we trust, so it's okay to give referrer informations
            // eslint-disable-next-line react/jsx-no-target-blank
            <a href={route.url} target='_blank' key={route.nameKey} className={classes.item}>
              {listItem}
            </a>
          )
        )
      })}
    </List>
  )

  return (
    <nav className={classes.drawer}>
      <Drawer
        variant='permanent'
        open
        classes={{
          paper: classNames(classes.drawerPaper),
        }}
      >
        <img src={logo} alt={t('app.header.logo.alt')} className={classes.logo} />
        {links}
        {displayAd && <Ad />}
      </Drawer>
    </nav>
  )
}

export default Sidebar
