/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStyles, Theme } from '@material-ui/core'
import { HEADER_HEIGHT } from '../../theme'

const defaultHeight = '49px'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primaryBackground.main,
      boxShadow: 'none',
      height: `${HEADER_HEIGHT}px`,
      background: 'none',
      padding: theme.spacing(2, 10, 0, 10),
      zIndex: 1,
    },
    background: {},
    toolbar: {
      padding: 0,
    },
    button: {
      position: 'absolute',
      right: 0,
    },
    logo: {},
  })

export default adStyle
