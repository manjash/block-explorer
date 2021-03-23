import React, { MouseEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Header from '../Header/Header'
import arrowDown from '../../assets/images/arrow_down.svg'
import splashStyle from '../../assets/jss/components/Splash/splashStyle'
import { debounce } from '../../utils/debounce'
import Search from '../../container/Search/Search'

const useStyles = makeStyles(splashStyle)

const Splash = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [isSticky, setSticky] = useState(false)
  const anchor = useRef() as MutableRefObject<HTMLDivElement>
  const theme = useTheme()
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))
  const margin = isSmallBreakpoint ? 70 : 0

  const executeScroll = (e: MouseEvent) => {
    e.preventDefault()

    window.history.pushState(null, '', '/#blocks')

    window.scrollTo({
      top: window.pageYOffset + anchor.current.getBoundingClientRect().top - margin,
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

  // hack to load the page at the current position if the hash is present in the URL
  useEffect(() => {
    if (location.hash.includes('#blocks')) {
      window.scrollTo({
        top: window.pageYOffset + anchor.current.getBoundingClientRect().top - margin,
      })
    }
  }, [])

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

        <a href='#blocks' className={classes.viewAll} onClick={executeScroll}>
          {t('app.dashboard.view_blocks')}
          <img src={arrowDown} alt={t('app.header.logo.alt')} />
        </a>

        <div className={classes.splash}>
          <div className={classes.background} />
        </div>
        <span ref={anchor} id='blocks' />
      </div>
    </>
  )
}

export default Splash
