import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Header from '../Header/Header'
import arrowDown from '../../assets/images/arrow_down.svg'
import splashStyle from '../../assets/jss/components/Splash/splashStyle'
import { debounce } from '../../utils/debounce'
import { HEADER_HEIGHT } from '../../assets/jss/theme'
import Search from '../../container/Search/Search'

const useStyles = makeStyles(splashStyle)

const Splash = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [isSticky, setSticky] = useState(false)
  const anchor = useRef() as MutableRefObject<HTMLDivElement>

  const executeScroll = () => {
    window.scrollTo({
      top: window.pageYOffset + anchor.current.getBoundingClientRect().top - HEADER_HEIGHT,
      behavior: 'smooth',
    })
  }

  const handleScroll = debounce(() => {
    if (anchor == null || anchor.current == null) {
      return
    }
    setSticky(anchor.current.getBoundingClientRect().top - 300 <= 0)
  }, 15)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <div>
        {isSticky && <Header isSticky={isSticky} showSearch />}

        <Typography variant='h1' className={classes.h1}>
          {t('app.dashboard.title')}
        </Typography>
        <div className={classes.search}>
          <Search />
        </div>
        <div className={classNames({ [classes.placeholder]: isSticky })}></div>

        <p className={classes.viewAll} onClick={executeScroll}>
          {t('app.dashboard.view_blocks')}
          <img src={arrowDown} alt={t('app.header.logo.alt')} />
        </p>

        <div className={classes.splash}>
          <div className={classes.background} />
        </div>
      </div>
      <span ref={anchor} />
    </>
  )
}

export default Splash
