import React from 'react'
import { useTranslation } from 'react-i18next'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

import headerStyle from '../../assets/jss/components/Header/headerStyle'
import hexofish from '../../assets/images/logo-fishonly.svg'

const useStyles = makeStyles(headerStyle)

interface Props {
  isSmallBreakpoint: Boolean
}

const Header = ({ isSmallBreakpoint }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        {isSmallBreakpoint && (
          <img src={hexofish} alt={t('app.header.logo.alt')} className={classes.logo} />
        )}
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder={t('app.header.search.placeholder')}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': t('app.header.search.placeholder') }}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
