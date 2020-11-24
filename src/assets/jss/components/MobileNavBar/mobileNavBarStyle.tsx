import { createStyles, Theme } from '@material-ui/core'

const mobileNavBarStyle = (theme: Theme) =>
  createStyles({
    root: {
      background: theme.sidebar?.background,
      bottom: 0,
      top: 'auto',
      position: 'fixed',
      width: '100%',
    },
  })

export default mobileNavBarStyle
