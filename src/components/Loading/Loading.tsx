import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles, createStyles, Theme } from '@material-ui/core'

const Loading = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: theme.shape.borderRadius,
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
    },
  }),
)(LinearProgress)

export default Loading
