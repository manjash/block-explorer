import { createStyles, Theme } from '@material-ui/core'
import { HEADER_HEIGHT, HEADER_HEIGHT_SM } from '../theme'

const layoutStyle = (theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'block',
      },
    },
    headerPlaceholder: {
      height: '50px',
    },
    wrapper: {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        minWidth: '100vw',
        width: '100vw',
      },
    },
    content: {
      width: '100%',
      minHeight: '100vh',
      paddingTop: HEADER_HEIGHT,
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        paddingTop: HEADER_HEIGHT_SM,
        paddingBottom: theme.spacing(6),
      },
    },
    noPadding: {
      paddingTop: 0,
    },
  })

export default layoutStyle
