import { createStyles, Theme } from '@material-ui/core'

const containerStyle = (theme: Theme) =>
  createStyles({
    title: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      fontSize: '36px',
    },
    paragraph: {
      marginBottom: theme.spacing(4),
      color: theme.palette.secondary.main,
    },
    root: {
      maxWidth: '470px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    },
  })

export default containerStyle
