import { createStyles, Theme } from '@material-ui/core'

const alertStyle = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.body2,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(4),
      fontSize: '14px',
      lineHeight: '18px',
      '& a': {
        color: '#F6C5E6',
        textDecoration: 'none',
      },
    },
    error: {
      fontFamily: ['extended-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      backgroundColor: theme.palette.error.main,
      color: '#CE3722',
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
      fontSize: '20px',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        lineHeight: 1,
      },
    },
  })

export default alertStyle
