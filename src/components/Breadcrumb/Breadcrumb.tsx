import React from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

import { RoutePath } from '../../routes/routePath'
import breadcrumbStyle from '../../assets/jss/components/Breadcrumb/breadcrumbStyle'

import home from '../../assets/images/breadcrumb/home.svg'

const useStyles = makeStyles(breadcrumbStyle)

interface Path {
  title: string
  to?: string
  logo: string
}

export interface Props {
  paths: Path[]
}

const Breadcrumb = ({ paths }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const pathsLength = paths.length
  return (
    <Breadcrumbs separator={'/'} aria-label='breadcrumb' className={classes.root}>
      <Link
        className={classNames(classes.pill, classes.link)}
        key='home'
        color='inherit'
        to={`${RoutePath.Home}#blocks`}
      >
        <img src={home} role='presentation' />
        <span>{t('app.components.breadcrumb.home')}</span>
      </Link>

      {paths.map((path, index) => {
        if (path.to) {
          return (
            <Link
              className={classNames(classes.pill, classes.link, {
                [classes['lastItem']]: pathsLength === index + 1,
              })}
              key={String(path.title)}
              color='inherit'
              to={path.to}
            >
              <img src={path.logo} role='presentation' />
              <span>{path.title}</span>
            </Link>
          )
        }
        return (
          <span
            className={classNames(classes.pill, {
              [classes['lastItem']]: pathsLength === index + 1,
            })}
            key={String(path.title)}
          >
            <img src={path.logo} role='presentation' />
            <span>{path.title}</span>
          </span>
        )
      })}
    </Breadcrumbs>
  )
}

export default Breadcrumb
