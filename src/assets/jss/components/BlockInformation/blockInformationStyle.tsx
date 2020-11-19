import { createStyles, Theme } from '@material-ui/core'
import { defaultBorderColor } from '../../base'

const blockInformationStyle = (theme: Theme) =>
  createStyles({
    root: {
      width: '33%',
      padding: theme.spacing(2, 2, 2, 2),
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
      backgroundColor: defaultBorderColor,
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

export default blockInformationStyle
