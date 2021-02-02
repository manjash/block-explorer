/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStyles, Theme } from '@material-ui/core'
import { HEADER_HEIGHT } from '../../theme'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primaryBackground.main,
      boxShadow: 'none',
      height: `${HEADER_HEIGHT}px`,
      background: 'none',
      padding: theme.spacing(2, 10, 0, 10),
      zIndex: 1,
      transition: `all 0.1s ${theme.transitions.easing.easeInOut}`,
    },
    sticky: {
      position: 'fixed',
      border: `1px solid ${theme.palette.borderColor.main}`,
      top: 0,
    },
    background: {},
    toolbar: {
      padding: 0,
    },
    button: {
      opacity: 1,
      position: 'absolute',
      right: 0,
    },
    logo: {
      opacity: 1,
    },
    invisible: {
      opacity: 0,
    },
  })

export default adStyle
