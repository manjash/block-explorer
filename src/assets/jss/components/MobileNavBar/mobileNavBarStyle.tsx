import { backgroundNavigationColor } from '../../base'
import { createStyles } from '@material-ui/core'

const mobileNavBarStyle = () =>
  createStyles({
    root: {
      background: backgroundNavigationColor,
      bottom: 0,
      top: 'auto',
      position: 'fixed',
      width: '100%',
    },
  })

export default mobileNavBarStyle
