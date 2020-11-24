import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

import breadcrumbStyle from '../../assets/jss/components/Breadcrumb/breadcrumbStyle'

const useStyles = makeStyles(breadcrumbStyle)

export enum PillType {
  Route = 'route',
  Block = 'block',
  Transaction = 'transaction',
}

interface Path {
  title: string | Number
  to?: string
  type: PillType
}

interface Props {
  paths: Path[]
}

const Breadcrumb = ({ paths }: Props) => {
  const classes = useStyles()

  const pathsLength = paths.length
  return (
    <Breadcrumbs separator={null} aria-label='breadcrumb' className={classes.root}>
      {paths.map((path, index) => {
        if (path.to) {
          return (
            <Link
              className={classNames(classes.pill, classes.link, {
                [classes[path.type]]: true,
                [classes['lastItem']]: pathsLength === index + 1,
              })}
              key={String(path.title)}
              color='inherit'
              to={path.to}
            >
              {path.title}
            </Link>
          )
        }
        return (
          <span
            className={classNames(classes.pill, {
              [classes[path.type]]: true,
              [classes['lastItem']]: pathsLength === index + 1,
            })}
            key={String(path.title)}
          >
            {path.title}
          </span>
        )
      })}
    </Breadcrumbs>
  )
}

export default Breadcrumb
