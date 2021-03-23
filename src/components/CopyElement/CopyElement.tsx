import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import Tooltip from '@material-ui/core/Tooltip'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import copyElementStyle from '../../assets/jss/components/CopyElement/copyElementStyle'
import copyIcon from '../../assets/images/copy.svg'
import { copyToClipboard } from '../../utils/copyToClipboard'

interface Prop {
  children: React.ReactElement
  copyString: string
}
const useStyles = makeStyles(copyElementStyle)

const CopyElement = ({ copyString, children }: Prop) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles()
  const [display, setDisplay] = useState(false)
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return
    }
    setDisplay(false)
  }
  const copyClick = () => {
    copyToClipboard(copyString)
    setDisplay(true)
  }
  const tooltipString = t('app.navigation.copy')
  return (
    <>
      {display && (
        <Snackbar open={display} onClose={handleClose} autoHideDuration={2000}>
          <Alert severity='info'>
            {t('app.navigation.copySuccess', {
              copyString: isSmallBreakpoint === true ? null : copyString,
            })}
          </Alert>
        </Snackbar>
      )}
      <div onClick={copyClick} className={classes.root}>
        <Tooltip title={tooltipString} placement='top'>
          <div className={classes.content}>
            {children}
            <img className={classes.icon} src={copyIcon} role='presentation' />
          </div>
        </Tooltip>
      </div>
    </>
  )
}

export default CopyElement
