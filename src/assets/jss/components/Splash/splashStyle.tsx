import { createStyles, Theme } from '@material-ui/core'
import splash from '../../../images/splash.svg'

const splashStyle = (theme: Theme) =>
  createStyles({
    splash: {
      // header + search + arrow down
      maxHeight: `calc(100vh - 500px)`,
      minHeight: '310px',
      background: 'linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, #FBFBFB 100%)',
      overflow: 'hidden',
      textAlign: 'center',
    },
    background: {
      background: `url(${splash}) no-repeat center`,
      height: '571px',
    },
    h1: {
      width: '620px',
      fontSize: '81px',
      textAlign: 'center',
      fontWeight: 400,
      display: 'block',
      lineHeight: '85px',
      margin: '60px auto 36px auto',
    },
    placeholder: {
      height: '92px',
      display: 'block',
    },
    wrapper: {
      textAlign: 'center',
    },
    search: {
      // maxWidth: '954px',
      margin: '0 auto',
      // position: 'sticky',
      top: 22,
      zIndex: 2,
    },
    sticky: {},
    arrowDown: {},
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
