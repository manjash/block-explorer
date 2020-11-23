import { createStyles, Theme } from '@material-ui/core'

const sidebarStyle = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      minHeight: '100vh',
      minWidth: `calc(100vw - ${theme.sidebar.width}px)`,
      backgroundColor: theme.palette.primaryBackground.main,
      padding: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        paddingBottom: '80px',
      },
    },
  })

export default sidebarStyle
