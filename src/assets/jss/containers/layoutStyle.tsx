import { createStyles, Theme } from '@material-ui/core'

const layoutStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'block',
      },
    },
    wrapper: {
      width: '100%',
      minWidth: `calc(100vw - ${theme.sidebar?.width}px - ${theme.spacing(10)}px)`,
      padding: theme.spacing(4),
      backgroundColor: theme.palette.primaryBackground?.main,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        minWidth: '100vw',
        width: '100vw',
      },
    },
    content: {
      width: '100%',
      minHeight: '100vh',
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(10),
      },
    },
  })

export default layoutStyle
