import { createStyles, Theme } from '@material-ui/core'

const boxWrapperStyle = (theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.common.white,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
    },
    header: {
      margin: theme.spacing(2, 0, 3, 0),
    },
  })

export default boxWrapperStyle
