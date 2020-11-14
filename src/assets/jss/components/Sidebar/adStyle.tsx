import { whiteColorRGB } from '../../base'
import { createStyles, Theme } from '@material-ui/core'

const adStyle = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      position: 'absolute',
      bottom: '20px',
      left: 0,
      right: 0,
      flexDirection: 'column',
      width: '216px',
      margin: '0 auto',
      height: '290px',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: `rgba(${whiteColorRGB}, 0.02)`,
    },
    image: {
      width: '100px',
      margin: '80px auto 0 auto',
      textAlign: 'center',
    },
    button: {
      margin: '73px 10px 0 10px',
    },
  })

export default adStyle
