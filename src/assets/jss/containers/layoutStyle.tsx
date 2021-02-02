import { createStyles, Theme } from '@material-ui/core'

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
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(10),
      },
    },
  })

export default layoutStyle
