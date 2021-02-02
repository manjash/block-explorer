import { createStyles, Theme } from '@material-ui/core'

const informationStyle = (theme: Theme) =>
  createStyles({
    root: {
      width: '33%',
      padding: theme.spacing(2, 2, 2, 2),
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      '&.copy': {
        cursor: 'pointer',
      },
      '& h6': {
        marginBottom: '3px',
      },
    },
    icon: {
      marginRight: theme.spacing(2),
      border: `1px solid ${theme.palette.borderColor.main}`,
      color: theme.palette.secondary.main,
      width: 42,
      height: 42,
      boxShadow: theme.shadows[1],
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      '& img': {
        flex: 1,
      },
    },
    content: {},
  })

export default informationStyle
