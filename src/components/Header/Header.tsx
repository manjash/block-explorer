import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import headerStyle from '../../assets/jss/components/Header/headerStyle'
import logo from '../../assets/images/logo.svg'
import { RoutePath } from '../../routes/routePath'
// import Search from '../../container/Search/Search'

const useStyles = makeStyles(headerStyle)

interface Props {
  isSmallBreakpoint: Boolean
}

const Header = ({ isSmallBreakpoint }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()
  console.log(isSmallBreakpoint)
  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {/* {isSmallBreakpoint && ( */}
        <Link to={RoutePath.Dashboard}>
          <img src={logo} alt={t('app.header.logo.alt')} className={classes.logo} />
        </Link>
        {/* )} */}
        {/* <Search /> */}
        <Button
          href='https://www.ironfish.network/docs/whitepaper/1_introduction'
          className={classes.button}
          variant='contained'
        >
          {t('app.header.docs')}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
