import { createStyles, Theme } from '@material-ui/core'
import { defaultBorderColor } from '../../base'

const metricsStyle = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${defaultBorderColor}`,
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: theme.spacing(1, 0, 1, 0),
      boxShadow: theme.shadows[3],
    },
  })

export default metricsStyle
