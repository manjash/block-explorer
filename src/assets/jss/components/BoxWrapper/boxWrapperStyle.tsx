import { createStyles, Theme } from '@material-ui/core'

const boxWrapperStyle = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 0, 2, 0),
    },
    header: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  })

export default boxWrapperStyle
