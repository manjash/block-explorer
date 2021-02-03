import { createStyles, Theme } from '@material-ui/core'
import blocks from '../../images/breadcrumb/blocks.svg'

const defaultHeight = '60px'

const adStyle = (theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
      height: defaultHeight,
      width: '100%',
      '& input': {
        paddingLeft: '56px!important',
      },
    },
    inputInput: {
      padding: `14px 0 14px 0`,
      width: '100%',
      color: theme.palette.secondary.main,
      '&::placeholder': {
        color: theme.palette.secondary.main,
      },
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      transition: `all 0.1s ${theme.transitions.easing.easeInOut}`,
      boxSizing: 'border-box',
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${theme.palette.borderColor.main}`,
      width: '100%',
      height: defaultHeight,
      boxShadow: theme.shadows[1],
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
    popup: {
      marginTop: '15px',
      border: `1px solid ${theme.palette.borderColor.main}`,
      boxShadow: theme.shadows[1],
    },
    list: {
      paddingLeft: '56px',
      '& li': {
        '&[data-focus="true"]': {
          backgroundColor: theme.palette.common.white,
        },
        '&:hover': {
          backgroundColor: theme.palette.common.white,
        },
        background: `url(${blocks}) no-repeat`,
        paddingLeft: '30px',
        backgroundPositionY: 'center',
      },
    },
  })

export default adStyle
