import { createStyles, Theme } from '@material-ui/core'

const alertStyle = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.body2,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(1, 2, 1, 2),
      backgroundColor: theme.palette.error.main,
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
