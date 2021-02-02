import { createStyles, Theme } from '@material-ui/core'
import { HEADER_HEIGHT } from '../theme'

const layoutStyle = (theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
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
      // minWidth: `calc(100vw - ${theme.sidebar?.width}px - ${theme.spacing(10)}px)`,
      // padding: theme.spacing(4),
      // backgroundColor: theme.palette.primaryBackground?.main,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        minWidth: '100vw',
        width: '100vw',
      },
    },
    content: {
      width: '100%',
      minHeight: '100vh',
      paddingBottom: theme.spacing(4),
      marginTop: HEADER_HEIGHT,
      paddingTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(10),
      },
    },
  })

export default layoutStyle
