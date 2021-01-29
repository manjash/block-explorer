import { fade, createStyles, Theme } from '@material-ui/core'

const defaultHeight = '49px'

const adStyle = (theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
      height: defaultHeight,
      width: '100%',
    },
    inputInput: {
      padding: `8px 0 ${theme.spacing(1)}px calc(1em + ${theme.spacing(4)}px)`,
      width: 'calc(100% - 8px)',
    },
    search: {
      transition: `all 0.33s ${theme.transitions.easing.easeInOut}`,
      color: theme.palette.primary.main,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.secondary.main}`,
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.01),
      },
      width: '100%',
      height: defaultHeight,
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 0, 2, 0),
      },
      boxShadow: theme.shadows[3],
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
