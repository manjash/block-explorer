import { createStyles, Theme } from '@material-ui/core'
import blocks from '../../images/breadcrumb/blocks.svg'
import transaction from '../../images/breadcrumb/transaction.svg'

const defaultHeight = '60px'

const adStyle = (theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
      height: defaultHeight,
      width: '100%',
      border: '1px solid transparent',
      '& input': {
        paddingLeft: '46px!important',
      },
    },
    inputRootFocused: {
      border: '1px solid #1D0070',
      boxShadow: '0px 1px 5px #B79DFF',
    },
    inputInput: {
      padding: `15px 0 16px 0`,
      width: '100%',
      color: theme.palette.secondary.main,
      '& > div': { paddingRight: '0 !important' },
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
      border: `1px solid ${theme.palette.borderColor?.main}`,
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
      marginTop: '14px',
      border: `1px solid ${theme.palette.borderColor?.main}`,
      borderTop: 'none',
      boxShadow: theme.shadows[1],
    },
    list: {
      paddingLeft: '56px',
    },
    groupHeader: {
      fontSize: '14px',
      marginBottom: '2px',
    },
    group: {
      '& > ul': {
        padding: 0,
      },
      '& li': {
        '&[data-focus="true"]': {
          backgroundColor: theme.palette.grey[200],
          borderColor: 'transparent',
        },
        paddingLeft: '30px',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
      },
    },
    blocks: {
      '& li': {
        backgroundImage: `url(${blocks})`,
      },
    },
    transactions: {
      '& li': {
        backgroundImage: `url(${transaction})`,
      },
    },
  })

export default adStyle
