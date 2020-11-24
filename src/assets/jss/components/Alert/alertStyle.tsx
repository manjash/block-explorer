import { createStyles, fade, Theme } from '@material-ui/core'

const alertStyle = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.body2,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2, 2, 2, 2),
      boxShadow: theme.shadows[5],
    },
    error: {
      backgroundColor: theme.palette.error.main,
    },
    information: {
      backgroundColor: fade(theme.palette.secondary.main, 0.9),
      color: theme.palette.common.white,
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    header: {
      display: 'flex',
      alignItems: 'center',
    },
  })

export default alertStyle
