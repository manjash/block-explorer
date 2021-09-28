import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import refreshButtonStyle from '../../assets/jss/components/RefreshButton/refreshButtonStyle'
import reloadImg from '../../assets/images/reload.svg'

const DEFAULT_TIMEOUT = 15000
interface Prop {
  onClick: Function
}

const StyledButton = withStyles(refreshButtonStyle)(Button)

const RefreshButton = ({ onClick }: Prop) => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()
  let timeout: ReturnType<typeof setTimeout> | null = null

  useEffect(() => {
    setTimeoutVisibility()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setTimeoutVisibility = () => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => setIsVisible(true), DEFAULT_TIMEOUT)
  }

  const clickHandler = () => {
    setIsVisible(false)
    onClick()
    setTimeoutVisibility()
  }

  return (
    <>
      {isVisible && (
        <StyledButton variant='contained' onClick={clickHandler}>
          <img src={reloadImg} />
          {t('app.navigation.refresh')}
        </StyledButton>
      )}
    </>
  )
}

export default RefreshButton
