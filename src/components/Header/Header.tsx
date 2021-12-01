import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import headerStyle from '../../assets/jss/components/Header/headerStyle'
import logo from '../../assets/images/logo.svg'
import { RoutePath } from '../../routes/routePath'
import Search from '../../container/Search/Search'

const useStyles = makeStyles(headerStyle)

// Config value for showing the "Network Unavailable" banner.
const isNetworkAvailable = true

// Config value for showing the "Block Explorer Unavailable" banner.
const isExplorerAvailable = true

interface Props {
  showSearch: Boolean
  isSticky?: Boolean
  isTop?: Boolean
}

const Header = ({ isSticky, isTop, showSearch }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <AppBar
      position='relative'
      className={classNames(classes.root, {
        [classes.sticky]: isSticky,
        [classes.isTop]: showSearch && isTop,
      })}
    >
      {(!isNetworkAvailable || !isExplorerAvailable) && (
        <div className={classes.networkUnavailableBanner}>
          <span>
            <strong>
              {!isNetworkAvailable ? 'Network Unavailable.' : 'Block Explorer Unavailable.'}
            </strong>{' '}
            Check{' '}
            <a
              href='https://discord.gg/EkQkEcm8DH'
              target='_blank'
              rel='noreferrer'
              style={{ color: 'black' }}
            >
              Discord
            </a>{' '}
            for updates.
          </span>
        </div>
      )}
      <Toolbar className={classes.toolbar}>
        <Link to={RoutePath.Home}>
          <img
            src={logo}
            alt={t('app.header.logo.alt')}
            className={classNames(classes.logo, {
              [classes.invisible]: !isTop && !isSticky,
            })}
          />
        </Link>
        <div className={classes.search}>{showSearch && <Search />}</div>
        <div className={classes.rightWrapper}>
          {/* <Link to={RoutePath.Charts}>{t('app.header.charts')}</Link> */}
          <Button
            href='https://www.ironfish.network/docs/whitepaper/1_introduction'
            className={classNames(classes.button, {
              [classes.invisible]: !isTop && !isSticky,
            })}
            variant='contained'
          >
            {t('app.header.docs')}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
