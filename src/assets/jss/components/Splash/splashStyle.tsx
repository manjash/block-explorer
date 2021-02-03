import { createStyles, Theme } from '@material-ui/core'
import splash from '../../../images/splash.svg'
import splashMobile from '../../../images/splash_mobile.svg'
import { HEADER_HEIGHT } from '../../theme'

const splashStyle = (theme: Theme) =>
  createStyles({
    splash: {
      // header + search + arrow down
      maxHeight: `calc(100vh - 500px)`,
      minHeight: '310px',
      background: 'linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, #FBFBFB 100%)',
      overflow: 'hidden',
      textAlign: 'center',
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
      [theme.breakpoints.down('sm')]: {
        maxHeight: 'inherit',
      },
    },
    background: {
      background: `url(${splash}) no-repeat center`,
      height: '571px',
      [theme.breakpoints.down('sm')]: {
        background: `url(${splashMobile}) no-repeat center`,
        height: '505px',
      },
    },
    h1: {
      width: '620px',
      fontSize: '81px',
      textAlign: 'center',
      fontWeight: 400,
      display: 'block',
      lineHeight: '85px',
      margin: '60px auto 36px auto',
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
        width: '320px',
        fontSize: '42px',
        lineHeight: '52px',
      },
    },
    placeholder: {
      height: '92px',
      display: 'block',
    },
    wrapper: {
      textAlign: 'center',
    },
    search: {
      margin: '0 auto',
      height: HEADER_HEIGHT,
      maxWidth: '954px',
      zIndex: 2,
      position: 'relative',
      padding: theme.spacing(0, 2, 0, 2),
      [theme.breakpoints.down('sm')]: {
        height: '60px',
        '& > div': {
          position: 'relative',
        },
      },
    },
    viewAll: {
      display: 'flex',
      cursor: 'pointer',
      flexDirection: 'column',
      width: '200px',
      color: theme.palette.info.main,
      alignItems: 'center',
      margin: theme.spacing(4, 'auto', 0, 'auto'),
    },
  })

export default splashStyle
