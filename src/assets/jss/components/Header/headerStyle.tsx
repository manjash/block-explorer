import { defaultPrimaryBackgroundColor } from '../../base'
import { fade, createStyles, Theme } from '@material-ui/core'

const defaultHeight = '49px'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: defaultPrimaryBackgroundColor,
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(2),
      },
    },
    inputRoot: {
      color: 'inherit',
      height: defaultHeight,
      width: '100%',
    },
    inputInput: {
      padding: `4px 0 ${theme.spacing(1)}px calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
    },
    logo: {
      background: theme.palette.secondary.main,
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      width: defaultHeight,
      height: defaultHeight,
      marginRight: theme.spacing(2),
    },
    search: {
      color: theme.palette.primary.main,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.secondary.main}`,
      '&:hover': {
        backgroundColor: fade('#000', 0.05),
      },
      width: '100%',
      margin: theme.spacing(5, 2, 0, 2),
      height: defaultHeight,
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 0, 2, 0),
      },
    },
    searchIcon: {
      color: theme.palette.primary.main,
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

export default adStyle
