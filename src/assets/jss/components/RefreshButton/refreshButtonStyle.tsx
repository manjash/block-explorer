import { createStyles, Theme } from '@material-ui/core'
import { HEADER_HEIGHT, HEADER_HEIGHT_SM } from '../../theme'

const refreshButtonStyle = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#FFD8F2',
      color: '#1D0070',
      borderRadius: '42px',
      boxShadow: theme.shadows[2],
      padding: '6px 14px 6px 14px',
      position: 'fixed',
      top: `calc(${HEADER_HEIGHT}px + 10px)`,
      right: 0,
      left: 0,
      margin: 'auto',
      zIndex: 3,
      '&:hover': {
        backgroundColor: '#FFF',
        color: '#000',
      },
      '& img': {
        marginRight: '10px',
        width: '20px',
        height: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        top: `calc(${HEADER_HEIGHT_SM}px - 18px)`,
      },
    },
  })

export default refreshButtonStyle
