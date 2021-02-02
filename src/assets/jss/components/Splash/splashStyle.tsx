import { createStyles, Theme } from '@material-ui/core'

const splashStyle = (theme: Theme) =>
  createStyles({
    splash: {
      // header + search + arrow down
      // minHeight: `calc(100vh - 255px)`,
      background: 'linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, #FBFBFB 100%)',
      height: '600px',
      overflow: 'hidden',
    },
    h1: {
      width: '620px',
      fontSize: '81px',
      textAlign: 'center',
      fontWeight: 400,
      display: 'block',
      lineHeight: '85px',
      margin: '96px auto 36px auto',
    },
    wrapper: {
      textAlign: 'center',
    },
    search: {
      maxWidth: '954px',
      margin: '0 auto',
      position: 'sticky',
      top: 22,
      zIndex: 2,
    },
    arrowDown: {},
    background: {},
    viewAll: {
      display: 'flex',
      cursor: 'pointer',
      flexDirection: 'column',
      width: '200px',
      color: theme.palette.info.main,
      alignItems: 'center',
      margin: theme.spacing(4, 'auto', 0, 'auto'),
    },
    h6: {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      width: '65px',
      marginBottom: '15px',
      textAlign: 'center',
    },
  })

export default splashStyle
