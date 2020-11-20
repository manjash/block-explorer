import { createStyles, Theme } from '@material-ui/core'
import { boxShadow, whiteColor } from '../../base'

const boxWrapperStyle = (theme: Theme) =>
  createStyles({
    root: {
      background: whiteColor,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      ...boxShadow,
    },
    header: {
      margin: theme.spacing(4, 0, 3, 0),
    },
  })

export default boxWrapperStyle
