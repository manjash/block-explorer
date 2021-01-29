import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

import headerStyle from '../../assets/jss/components/Header/headerStyle'
import hexofish from '../../assets/images/logo-fishonly.svg'
import { RoutePath } from '../../routes/routePath'
import Search from '../../container/Search/Search'

const useStyles = makeStyles(headerStyle)

interface Props {
  isSmallBreakpoint: Boolean
}

const Header = ({ isSmallBreakpoint }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {isSmallBreakpoint && (
          <Link to={RoutePath.Dashboard}>
            <img src={hexofish} alt={t('app.header.logo.alt')} className={classes.logo} />
          </Link>
        )}
        <Search />
      </Toolbar>
    </AppBar>
  )
}

export default Header
