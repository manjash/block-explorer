import { createStyles, Theme } from '@material-ui/core'

const alertStyle = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.body2,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      fontSize: '14px',
      padding: theme.spacing(4),
      lineHeight: '18px',
      '& a': {
        color: '#F6C5E6',
        textDecoration: 'none',
      },
    },
    error: {
      backgroundColor: theme.palette.error.main,
    },
    information: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),

      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
      },
    },
    title: {
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        lineHeight: 1,
      },
    },
  })

export default alertStyle
