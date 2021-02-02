import { createStyles, Theme } from '@material-ui/core'

const metricsStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: theme.spacing(1, 0, 0, 0),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
  })

export default metricsStyle
