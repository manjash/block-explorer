import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import error404 from '../../assets/images/error404.svg'
import errorStyle from '../../assets/jss/components/Error404/error404Style'
import { RoutePath } from '../../routes/routePath'

interface Prop {
  title?: string
  description?: string
}

const useStyles = makeStyles(errorStyle)

const Splash = ({ title, description }: Prop) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <img src={error404} role='presentation' />
        <Typography variant='h2' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='h5' className={classes.paragraph}>
          {description}
        </Typography>
        <Button component={Link} to={RoutePath.Home} variant='contained'>
          {t('app.navigation.takeMeHome')}
        </Button>
      </div>
    </>
  )
}

export default Splash
