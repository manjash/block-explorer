import { createStyles, Theme } from '@material-ui/core'

const defaultHeight = '49px'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      boxShadow: 'none',
      background: 'none',
    },
    toolbar: {
      padding: 0,
    },
    logo: {
      background: theme.palette.secondary.main,
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      width: defaultHeight,
      height: defaultHeight,
      marginRight: theme.spacing(2),
    },
  })

export default adStyle
