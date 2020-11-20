import { createStyles, Theme } from '@material-ui/core'
import { defaultBorderColor, whiteColor, boxShadow } from '../../base'

const metricsStyle = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: whiteColor,
      border: `1px solid ${defaultBorderColor}`,
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: theme.spacing(1, 0, 1, 0),
      ...boxShadow,
    },
  })

export default metricsStyle
