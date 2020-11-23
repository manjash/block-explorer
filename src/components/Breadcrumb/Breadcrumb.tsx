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
  to: string
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
      {paths.map((path, index) => (
        <Link
          className={classNames(classes.link, {
            [classes[path.type]]: true,
            [classes['lastItem']]: pathsLength === index + 1,
          })}
          key={path.to}
          color='inherit'
          to={path.to}
        >
          {path.title}
        </Link>
      ))}
    </Breadcrumbs>
  )
}

export default Breadcrumb
