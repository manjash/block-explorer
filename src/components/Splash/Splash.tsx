import React, { MutableRefObject, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import splashStyle from '../../assets/jss/components/Splash/splashStyle'
import Search from '../../container/Search/Search'
import splash from '../../assets/images/splash.svg'
import Header from '../Header/Header'

const useStyles = makeStyles(splashStyle)

// interface Props {
//   // isSmallBreakpoint: Boolean
// }

const Splash = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const anchor = useRef() as MutableRefObject<HTMLDivElement>

  const executeScroll = () => {
    anchor.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <div className={classes.wrapper}>
        <Header isSmallBreakpoint={false} />

        <Typography variant='h4' className={classes.h1}>
          {t('app.dashboard.title')}
        </Typography>

        <Search />

        <p onClick={executeScroll}>{t('app.dashboard.view_blocks')}</p>
      </div>

      <img src={splash} alt={t('app.header.logo.alt')} className={classes.background} />
      <span ref={anchor} />
    </div>
  )
}

export default Splash
