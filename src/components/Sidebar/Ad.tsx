import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import logo from '../../assets/images/logo-fishonly.svg'
import adStyle from '../../assets/jss/components/Sidebar/adStyle'

const useStyles = makeStyles(adStyle)

const Ad = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.container}>
      <img className={classes.image} src={logo} alt={t('app.navigation.sidebar.ironfish')} />

      <Button className={classes.button} variant='contained'>
        {t('app.navigation.sidebar.ironfish')}
      </Button>
    </div>
  )
}

export default Ad
