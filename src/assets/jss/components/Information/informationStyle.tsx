import { createStyles, Theme } from '@material-ui/core'

const informationStyle = (theme: Theme) =>
  createStyles({
    root: {
      width: '33%',
      padding: theme.spacing(2, 2, 2, 2),
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%',
      },
    },
    icon: {
      marginRight: theme.spacing(2),
      border: `1px solid ${theme.palette.borderColor?.main}`,
      color: theme.palette.secondary.main,
      width: 42,
      height: 42,
      boxShadow: theme.shadows[1],
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      '& img': {
        width: '16px',
        height: '16px',
        flex: 1,
      },
    },
    largeIcon: {
      '& img': {
        width: '20px',
        height: '20px',
      },
    },
    content: {},
  })

export default informationStyle
