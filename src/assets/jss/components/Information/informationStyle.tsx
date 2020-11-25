import { createStyles, Theme } from '@material-ui/core'

const informationStyle = (theme: Theme) =>
  createStyles({
    root: {
      width: '33%',
      padding: theme.spacing(2, 2, 2, 2),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      fontWeight: 500,
      color: theme.palette.primary.main,
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    icon: {
      marginRight: theme.spacing(1),
      color: theme.palette.secondary.main,
      width: 14,
      height: 14,
    },
    bar: {
      margin: theme.spacing(2, 0, 1, 0),
      backgroundColor: theme.palette.borderColor?.main,
      width: '80%',
      height: 2,
    },
    inside: {
      width: '25%',
      height: 2,
      borderColor: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  })

export default informationStyle
