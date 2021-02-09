import { createStyles, Theme } from '@material-ui/core'

const containerStyle = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '990px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    },
  })

export default containerStyle
